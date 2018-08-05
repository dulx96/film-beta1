import React from 'react'
import PropTypes from 'prop-types'
//import component
import TopbarMobile from './TopbarMobile'
import TopbarNonMobile from './TopbarNonMobile'
import { NavLink } from 'react-router-dom'
import { IconSearch } from '../Styles/Icons'
//import plugins
import { WithWindowSize } from '../WindowSize'
//import constant
import CDN from '../../constants/cdn'
//import style
import * as styles from './TopBar.less'

class TopBar extends React.PureComponent {
  render () {
    const {
      userReducer: {user, fetchUserSuccess},
    } = this.props
    return (
      <div className={styles.wrap}>
        {this.props.windowWidth >= 768 ?
          <TopbarNonMobile {...this.props} /> :
          <TopbarMobile {...this.props} />
        }
      </div>
    )
  }
}

TopBar.propTypes = {
  userReducer: PropTypes.object,
  toggleSideBar: PropTypes.func,
}
export default WithWindowSize(TopBar)
