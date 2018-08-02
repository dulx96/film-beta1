/* eslint-disable no-console */
import React from 'react'
import PropsTypes from 'prop-types'
//import component
import SideBar from '../../SideBar/index'
import HomeCategory from '../HomeCategory/index'
//import plugin
import windowSize from 'react-window-size'
import classNames from 'classnames'
import WheelReact from 'wheel-react'
//import constant
import * as responsive from '../../../constants/responsive'
//import style
import * as styles from './HomeBoard.less'

class HomeBoard extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={classNames({
        [styles.wrap]: true,
      })}>
        {/*<SideBar windowWidth={this.props.windowWidth} />*/}
        <div className={classNames({
          [styles.container]: true,
        })}>
          <HomeCategory sb_wd_scrIsActive={false} />

        </div>
      </div>
    )
  }
}

HomeBoard.propTypes = {
  homeBoardIsActive: PropsTypes.bool,
  sb_wd_scrIsActive: PropsTypes.bool,
}
export default windowSize(HomeBoard)
