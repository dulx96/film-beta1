import React from 'react'
import PropTypes from 'prop-types'

//import plugins
import classNames from 'classnames'
//import styles
import * as styles from './JaSubView.less'

export default class JaSubView extends React.PureComponent {
  render () {
    return (
      <div className={classNames({
        [styles.wrap]: true,
        [styles.fullscreen]: this.props.player.isFullscreen,
        [styles['enable-ja-sub']]: this.props.enableJaSub,
        [styles['enable-vi-sub']]: this.props.enableViSub,
      })}>
        {this.props.data}
      </div>
    )
  }
}
JaSubView.propTypes = {
  enableJaSub: PropTypes.bool.isRequired,
  enableViSub: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
}
