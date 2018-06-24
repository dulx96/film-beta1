import React from 'react'
//import component
import IconBoard from 'react-icons/lib/md/group-work'
//import style
import * as styles from './TopBar.less'

const TopBar = ({userReducer: {user, fetchUserSuccess}}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <a>
          <IconBoard size={40} />
        </a>

        <div style={{flex: 1}}>

        </div>

        <div className={styles.menu}>
          <p>Home</p>
          <p>News</p>
          <p>Contact</p>
          <p>Help</p>
          <p>Info</p>
          <p>Profile</p>
        </div>

        <div
          className={fetchUserSuccess ? styles.avatar : styles['avatar-onload']}
          style={fetchUserSuccess ? {backgroundImage: `url(${require(`../../resources/CircleImage/${user.ava}`)})`} : {}}>
        </div>
      </div>
    </div>
  )

}
export default TopBar