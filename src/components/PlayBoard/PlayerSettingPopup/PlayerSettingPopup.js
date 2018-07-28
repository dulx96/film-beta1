import React from 'react'
import PropTypes from 'prop-types'

//import styles
import * as styles from './PlayerSettingPopup.less'
import SpeedControl from './SpeedControl'
import SubControl from './SubControl'

export default class PlayerSettingPopup extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const leftChild = [
      <SpeedControl />,
    ]
    const rightChild = [
      <SubControl />,
    ]
    if (this.props.settingActive) {
      return (
        <div className={styles.wrap} onClick={this.props.toggleSetting}>
          <div className={styles.container}>
            {leftChild.map(child => React.cloneElement(child, {
              ...this.props,
              className: styles['left-setting'],
            }))}
            <div className={styles['big-setting-popup-icon']} />
            {rightChild.map(child => React.cloneElement(child, {
              ...this.props,
              className: styles['right-setting'],
            }))}
          </div>
        </div>
      )
    }
    else {
      return null
    }
  }
}

PlayerSettingPopup.propTypes = {
  toggleSetting: PropTypes.func.isRequired,
  settingActive: PropTypes.bool.isRequired,
}
