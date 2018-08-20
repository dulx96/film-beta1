import React from 'react'
import PropTypes from 'prop-types'

//import components
import Filter from 'components/Filter'
//import plugins
import classNames from 'classnames'
//import styles
import * as styles from './MenuBar.less'

export default class MenuBar extends React.PureComponent {
  static propTypes = {
    windowWidth: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    toggleMenuBar: PropTypes.func.isRequired,
  }
  static defaultProps = {
    active: false,
  }

  render () {
    return (
      //only visible on mobile device
      this.props.windowWidth < 768 ? (
          <div className={classNames(styles.wrap,
            {[styles.active]: this.props.active})}>
            <div className={styles['top-section']}>
              <h1>BenkiTv</h1>
              <p>Tìm kiếm </p>
              <div style={{flex: 1}} />
              <p onClick={this.props.toggleMenuBar}
                 className={styles['close-btn']}>X
              </p>
            </div>
            <Filter bar_style />
          </div>
        )
        : null
    )
  }
}
