import React from 'react'
import PropTypes from 'prop-types'
//import component
import { IconSearch } from '../Styles/Icons'

//import plugins
import windowSize from 'react-window-size'
//import constant
import CDN from '../../constants/cdn'
//import style
import * as styles from './TopBar.less'

const TopBar = (
  {userReducer: {user, fetchUserSuccess}, homeBoardIsActive, toggleSideBar, windowWidth}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        {homeBoardIsActive &&
        <div onClick={() => toggleSideBar(windowWidth)}>toggle</div>}
        <div style={{flex: 0.5}}>
        </div>
        <div className={styles['search-bar']}>
          <IconSearch size={25} />
        </div>
        <div style={{flex: 1}}>
        </div>
        <div className={styles.menu}>
          <p className={styles.active}>Home</p>
          <p>News</p>
          <p>Contact</p>
          <p>Help</p>
          <p>Info</p>
        </div>
        <div
          className={fetchUserSuccess ? styles.avatar : styles['avatar-onload']}
          style={fetchUserSuccess ? {
            backgroundImage: `url(${CDN + user.ava})`,
          } : {}}>
        </div>
      </div>
    </div>
  )
}
TopBar.propTypes = {
  userReducer: PropTypes.object,
  homeBoardIsActive: PropTypes.bool,
  toggleSideBar: PropTypes.func,
  windowWidth: PropTypes.number,
}
export default windowSize(TopBar)
