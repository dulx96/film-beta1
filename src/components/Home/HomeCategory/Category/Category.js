import React from 'react'
import PropTypes from 'prop-types'
//import components
import { MovieCard } from '../../../CardItem/index'

//import constant
import { CAT_LIST } from '../../../../constants/categoryName'
//import styles
import * as styles from './Category.less'

class Category extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      getCategoryDataSuccess: false,
      data: [],
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    let catIndex = CAT_LIST.findIndex((cat) => cat === nextProps.catName)
    if (nextProps.CAT[catIndex].getCategoryDataSuccess &&
      !prevState.getCategoryDataSuccess) {
      return {
        getCategoryDataSuccess: true,
        data: nextProps.CAT[catIndex].data,
      }
    }
    else {
      return null
    }
  }

  componentDidMount () {
    this.props.getCategoryData(this.props.catName)
  }

  render () {
    const MovieCardComponentArray = this.state.data.map(
      (data, index) => <MovieCard key={index} {...data} />)
    return (
      <div className={styles.wrap}>
        {this.state.getCategoryDataSuccess || <div>loading</div>}
        {MovieCardComponentArray}
      </div>
    )
  }
}

Category.propTypes = {
  catName: PropTypes.string,
  getCategoryData: PropTypes.func,
  CAT: PropTypes.array,
}

export default Category
