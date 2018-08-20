import React from 'react'
import PropTypes from 'prop-types'
//import components
import { MovieCardNonMobile, MovieCardMobile } from 'components/CardItem'
//import plugins
import classNames from 'classnames'
//import styles
import * as styles_bar from './FilterSideBar.less'
import * as styles_page from './FilterPage.less'
import * as styles from './FilterResutls.less'

class FilterResults extends React.PureComponent {
  static PropTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }
  static defaultProps = {
    data: [],
    loading: true,
  }

  render () {
    let ResultsCard = this.props.bar_style ?
      this.props.data.map(
        (data, index) => <MovieCardMobile key={index} {...data} />) :
      this.props.data.map(
        (data, index) => <MovieCardNonMobile key={index} {...data} />)

    return (
      <div className={classNames(styles.wrap, styles_bar['result-box-wrap'], styles_page['result-box-wrap'])}>
        {/*{this.props.loading && <div>loading <br /></div>}*/}
        {this.props.data.length > 0 ?
          ResultsCard :
          <div className={styles['not-found']}>
            <p>Không tìm thấy kết quả nào </p>
          </div>
        }
      </div>
    )
  }

}

export default FilterResults
