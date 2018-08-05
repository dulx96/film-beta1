/* eslint-disable no-console */
import React from 'react'
import PropsTypes from 'prop-types'
//import component
import HomeCategory from '../HomeCategory/index'
//import plugin
// import WindowSize from 'react-window-size'
import classNames from 'classnames'
//import constant
//import style
import * as styles from './HomeBoard.less'

class HomeBoard extends React.Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div className={classNames({
        [styles.wrap]: true,
      })}>
        <HomeCategory />
      </div>
    )
  }
}

HomeBoard.propTypes = {
  homeBoardIsActive: PropsTypes.bool,
  sb_wd_scrIsActive: PropsTypes.bool,
}
export default HomeBoard
