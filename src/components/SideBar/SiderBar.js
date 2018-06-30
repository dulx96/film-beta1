/* eslint-disable no-console */
import React from 'react'
//import component
import SideBarWideScreen from './SideBarWideScreen'
import SideBarSmallScreen from './SidebarSmallScreen'
//import plugins
import windowSize from 'react-window-size'
//import const
import * as responsive from '../../constants/responsive'

//import style

class SideBar extends React.Component {
  shouldComponentUpdate (nextProps) {
    return (nextProps.sb_wd_scrIsActive !== this.props.sb_wd_scrIsActive ||
      nextProps.sb_sml_scrIsActive !== this.props.sb_sml_scrIsActive) ||
      (nextProps.windowWidth - responsive.sideBarSwitchPoint) *
      (responsive.sideBarSwitchPoint - this.props.windowWidth) > 0

  }

  componentWillReceiveProps (nextProps) {
    nextProps.windowWidth !== this.props.windowWidth && (
      nextProps.windowWidth > responsive.sideBarSwitchPoint &&
      ((this.props.windowWidth < responsive.sideBarSwitchPoint ||
        this.props.sb_sml_scrIsActive) &&
        this.props.toggleSideBar())
    )
  }

  render () {
    return (
      this.props.windowWidth > responsive.sideBarSwitchPoint ?
        <SideBarWideScreen isVisible={this.props.sb_wd_scrIsActive} /> :
        <SideBarSmallScreen isVisible={this.props.sb_sml_scrIsActive} toggleSideBar={this.props.toggleSideBar}/>

    )
  }
}

export default windowSize(SideBar)
