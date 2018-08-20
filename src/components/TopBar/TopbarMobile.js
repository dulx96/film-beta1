import React from 'react'
//import context
import { MenuBarContext } from 'components/MenuBar'
//import style
import * as styles from './TopbarMobile.less'
import { IconSearch, Logo, Menu, User } from '../Styles/Icons'
import { Link } from 'react-router-dom'

class TopbarMobile extends React.PureComponent {
  render () {
    return (
      <div className={styles.wrap}>
        <MenuBarContext.Consumer>
          {({toggleMenuBar}) =>
            <Menu onClick={toggleMenuBar} className={styles.menu} size={28} />}
        </MenuBarContext.Consumer>
        <MenuBarContext.Consumer>
          {({toggleMenuBar}) =>
            <div onClick={toggleMenuBar}
                 className={styles.logo}><p>BenkiTV</p></div>}
        </MenuBarContext.Consumer>
        <User className={styles.user} size={32} />
      </div>
    )
  }
}

export default TopbarMobile
