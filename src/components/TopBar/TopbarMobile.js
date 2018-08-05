import React from 'react'
//import style
import * as styles from './TopbarMobile.less'
import { IconSearch, Logo, Menu, User } from '../Styles/Icons'
import { Link } from 'react-router-dom'

class TopbarMobile extends React.PureComponent {
  render () {
    return (
      <div className={styles.wrap}>
        <Menu className={styles.menu} size={28} />
        <IconSearch className={styles.search} size={32} />
        <Link to='/home' className={styles.logo}> <p>BenkiTV</p></Link>
        <User className={styles.user} size={32} />
      </div>
    )
  }
}

export default TopbarMobile
