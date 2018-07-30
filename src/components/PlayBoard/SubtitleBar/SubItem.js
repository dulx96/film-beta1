import React from 'react'
//import plugins
import classNames from 'classnames'
//import styles
import * as styles from './SubItem.less'

class SubItem extends React.PureComponent {
  render () {
    return (
      <div className={classNames({
        [styles.wrap]: true,
        [styles.active]: this.props.active,
      })}
           onClick={() => this.props.onClick(this.props.sub.startTime / 1000)}>
        <span className={classNames({
          [styles['play-btn']]: true,
          [styles[`bgc-${this.props.index % 10}`]]: true,
        })} />
        <div>{this.props.sub.text}</div>
      </div>
    )
  }
}

export default SubItem
