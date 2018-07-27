import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as styles from './SpeedControl.less'

export default class SpeedControl extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.stopPropagation()
    this.setState(prevState => ({active: !prevState.active}))
  }

  setPlayerSpeed (rate) {
    this.props.actions.changeRate(rate)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.player.playbackRate !== this.props.player.playbackRate ||
      nextState.active !== this.state.active
  }

  render () {
    const {player: {playbackRate}} = this.props

    return (
      <div className={classNames(
        {
          [styles['speed-control']]: true,
          [styles.active]: this.state.active,
        }, this.props.className)}
           onClick={(e) => this.handleClick(e)}
      >
        <p>{this.props.player.playbackRate}x </p>
        <div className={classNames(
          {[styles['sub-item']]: true, [styles.up]: true})}>
          <div onClick={() => playbackRate === 0.5
            ? this.setPlayerSpeed(1)
            : this.setPlayerSpeed(0.5)}>{playbackRate === 0.5 ? <p>1</p> :
            <p>0.5</p>}
          </div>
        </div>
        <div className={classNames(
          {[styles['sub-item']]: true, [styles.left]: true})}>
          <div onClick={() => playbackRate === 0.75
            ? this.setPlayerSpeed(1)
            : this.setPlayerSpeed(0.75)}>{playbackRate === 0.75 ? <p>1</p> :
            <p>0.75</p>}
          </div>
        </div>
        <div className={classNames(
          {[styles['sub-item']]: true, [styles.down]: true})}>
          <div onClick={() => playbackRate === 1.25
            ? this.setPlayerSpeed(1)
            : this.setPlayerSpeed(1.25)}>{playbackRate === 1.25 ? <p>1</p> :
            <p>1.25</p>}
          </div>
        </div>
        <div className={classNames(
          {[styles['sub-item']]: true, [styles.right]: true})}>
          <div onClick={() => playbackRate === 1.5
            ? this.setPlayerSpeed(1)
            : this.setPlayerSpeed(1.5)}>{playbackRate === 1.5 ? <p>1</p> :
            <p>1.5</p>}
          </div>
        </div>

      </div>
    )
  }
}
SpeedControl.propTypes = {
  className: PropTypes.string,
}
