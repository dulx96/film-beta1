import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as styles from './SubControl.less'

export default class SubControl extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  render () {
    return (
      <div className={classNames({
          [styles['subtitle-control']]: true,
          [styles.active]: this.state.active,
        },
        this.props.className)}
           onClick={e => {
             e.stopPropagation()
             this.setState(prevState => ({active: !prevState.active}))
           }
           }>
        <div className={classNames(
          {[styles['sub-item']]: true, [styles.up]: true})}>
          <div className={classNames({[styles.active]: this.props.enableJaSub})}
               onClick={e => {
                 e.stopPropagation()
                 this.props.toggleSub('ja')
               }
               }>
            <p>JA</p>
          </div>
        </div>
        <div className={classNames(
          {[styles['sub-item']]: true, [styles.down]: true})}>

          <div className={classNames({[styles.active]: this.props.enableViSub})}
               onClick={e => {
                 e.stopPropagation()
                 this.props.toggleSub('vi')
               }
               }>
            <p>VI</p>
          </div>
        </div>
      </div>
    )
  }

}
SubControl.propTypes = {
  enableJaSub: PropTypes.bool.isRequired,
  enableViSub: PropTypes.bool.isRequired,
  toggleSub: PropTypes.func.isRequired,
}
