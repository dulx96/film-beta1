import React from 'react'
//import component
import { IconSearch } from '../Icons'
//import style
import * as styles from './TopBar.less'

const TopBar = ({userReducer: {user, fetchUserSuccess}}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div style={{flex: 0.5}}>
        </div>
        <div className={styles['search-bar']}>
          <IconSearch size={25}/>
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
            backgroundImage: `url(${require(
              `../../resources/CircleImage/${user.ava}`)})`,
          } : {}}>
        </div>
      </div>
    </div>
  )
}
export default TopBar