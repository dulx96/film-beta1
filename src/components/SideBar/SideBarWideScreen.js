import React from 'react'
import PropTypes from 'prop-types'
//import component
import MenuSideBar from './MenuSideBar'

//import plugin
import classNames from 'classnames'
//import styles
import * as styles from './SideBar.less'

const SideBarWideScreen = ({isVisible}) => (
  <div className={classNames({
    [styles.SideBarWideScreen]: true,
    [styles.active]: isVisible
  })}>
    <MenuSideBar />
  </div>
)
SideBarWideScreen.propTypes = {
  isVisible: PropTypes.bool,
}
export default SideBarWideScreen
