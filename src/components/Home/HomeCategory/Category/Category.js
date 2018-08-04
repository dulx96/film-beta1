import React from 'react'
import PropTypes from 'prop-types'
//import components
import { MovieCard } from '../../../CardItem/index'
//import plugin
import { WithWindowSize } from '../../../WindowSize'
import classNames from 'classnames'
//import constant
import { CAT_LIST, CAT_TITLE } from '../../../../constants/categoryName'
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

  generateCatTitle (catName) {
    let index = CAT_LIST.findIndex((name) => name === catName)
    return {title: CAT_TITLE[index], index: index}
  }

  render () {
    const cat = this.generateCatTitle(this.props.catName)
    const MovieCardComponentArray = this.state.data.map(
      (data, index) => <MovieCard key={index} {...data} />)
    const MovieCardComponentArray10items = MovieCardComponentArray.slice(0, 10)
    const MovieCardComponentArray8items = MovieCardComponentArray.slice(0, 8)
    const MovieCardComponentArray6items = MovieCardComponentArray.slice(0, 6)
    const MovieCardComponentArray4items = MovieCardComponentArray.slice(0, 4)
    let screenWidth = this.props.windowWidth
    let scrollbarWidth = 17
    let MovieCardArray = MovieCardComponentArray4items
    if (screenWidth + scrollbarWidth >= 1366) {
      MovieCardArray = MovieCardComponentArray
    }
    else if (screenWidth + scrollbarWidth >= 1280) {
      MovieCardArray = MovieCardComponentArray10items
    }
    else if (screenWidth + scrollbarWidth >= 1024) {
      MovieCardArray = MovieCardComponentArray8items

    }
    else if (screenWidth + scrollbarWidth >= 768) {
      MovieCardArray = MovieCardComponentArray6items
    }

    return (
      <div className={styles.wrap}>
        <div className={styles.title}>
          <div className={classNames({
            [styles.circle]: true,
            [styles[`cat${cat.index}`]]: true,
          })} />
          <div className={styles.text}>
            <p>{cat.title}</p>
            <span>Toàn bộ</span>
          </div>
        </div>
        {MovieCardArray}
      </div>
    )
  }
}

Category.propTypes = {
  catName: PropTypes.string,
  getCategoryData: PropTypes.func,
  CAT: PropTypes.array,
}
export default WithWindowSize(Category)
