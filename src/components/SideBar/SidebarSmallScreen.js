import React from 'react'
import PropTypes from 'prop-types'
//import component
import MenuSideBar from './MenuSideBar'

//import plugin
import classNames from 'classnames'
//import styles
import * as styles from './SideBar.less'

const SideBarSmallScreen = ({isVisible, toggleSideBar}) => (
  <div className={classNames({
    [styles['sb-sm-scr']]: true,
    [styles.active]: isVisible,
  })}>
    <div className={styles.header}>
      <span>Toggle</span>
    </div>
    <MenuSideBar />
    {isVisible &&
    <div className={styles['blur-content']} onClick={() => toggleSideBar(0)} />}
  </div>
)
SideBarSmallScreen.propTypes = {
  isVisible: PropTypes.bool,
  toggleSideBar: PropTypes.func,
}
export default SideBarSmallScreen
