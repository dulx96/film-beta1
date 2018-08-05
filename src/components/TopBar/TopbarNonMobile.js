import React from 'react'
//import component

import { NavLink, Link } from 'react-router-dom'
import { IconSearch, User } from '../Styles/Icons'


import * as styles from './TopbarNonMobile.less'
import CDN from '../../constants/cdn'

class TopbarNonMobile extends React.PureComponent {
  render () {
    return (
      <div className={styles.wrap}>
        <Link to='/home' className={styles.logo}>BenkiTV</Link>
        <div style={{flex: 1}}/>
        <div className={styles['search-bar']}>
          <IconSearch size={25} />
        </div>
        <div className={styles.menu}>
          <NavLink to="/news" className={styles['nav-link']}
                   activeClassName={styles.active}>Tin tức</NavLink>
          <NavLink to="/search/anime" className={styles['nav-link']}
                   activeClassName={styles.active}>Anime</NavLink>
          <NavLink to="/search/j-drama" className={styles['nav-link']}
                   activeClassName={styles.active}>J-Drama</NavLink>
          <NavLink to="/search/music" className={styles['nav-link']}
                   activeClassName={styles.active}>Nhạc</NavLink>
          <NavLink to="/contacts" className={styles['nav-link']}
                   activeClassName={styles.active}>Liên hệ</NavLink>
        </div>
        <User className={styles.user} size={32}/>
      </div>
    )
  }
}

export default TopbarNonMobile
