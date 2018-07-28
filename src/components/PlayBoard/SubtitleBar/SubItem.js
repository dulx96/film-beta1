import React from 'react'
//import plugins
import classNames from 'classnames'
//import styles
import * as styles from './SubItem.less'

class SubItem extends React.Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.active !== this.props.active
  }

  render () {
    return (
      <div className={classNames({[styles.active]: this.props.active})}
           onClick={() => this.props.onClick(this.props.sub.startTime / 1000)}>
        <span>{this.props.sub.startTime / 1000}</span>
        <p>{this.props.sub.text}</p>
      </div>
    )
  }
}

export default SubItem
