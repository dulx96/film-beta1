/* eslint-disable no-console */
import React from 'react'
import PropsTypes from 'prop-types'
//import component
import SideBar from '../SideBar'
import HomeCategory from '../HomeCategory'
//import plugin
import windowSize from 'react-window-size'
import classNames from 'classnames'
import WheelReact from 'wheel-react'
//import constant
import * as responsive from '../../constants/responsive'
//import style
import * as styles from './HomeBoard.less'

class HomeBoard extends React.Component {
  constructor (props) {
    super(props)

    WheelReact.config({
      left: () => {
      },
      right: () => {
      },
      up: () => {

      },
      down: () => {
        this.state.scrollTop === 0 && this.props.toggleHomeBoard()
      },
    })
  }

  state = {
    scrollTop: 0,
  }

  componentDidMount () {
    this.container.addEventListener('scroll', this.handleContainerScroll)
  }

  handleContainerScroll = () => {
    this.setState({scrollTop: this.container.scrollTop})
  }

  render () {
    return (
      <div className={classNames({
        [styles.wrap]: true,
        [styles.active]: this.props.homeBoardIsActive,
      })}>
        <SideBar windowWidth={this.props.windowWidth} />
        <div className={classNames({
          [styles.container]: true,
          [styles['sb-wd-active']]: this.props.sb_wd_scrIsActive &&
          this.props.windowWidth > responsive.sideBarSwitchPoint,
        })}
             ref={el => this.container = el}
             {...WheelReact.events}>
          <HomeCategory sb_wd_scrIsActive={this.props.sb_wd_scrIsActive &&
          this.props.windowWidth > responsive.sideBarSwitchPoint} />

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
