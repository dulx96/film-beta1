import React from 'react'
import PropTypes from 'prop-types'
//import component
import PlayBoard from '../PlayBoard'
//import plugins
import classNames from 'classnames'
//import styles
import * as styles from './MoviePlayPage.less'

export default class MoviePlayPage extends React.PureComponent {
  componentDidMount () {
  }

  render () {
    return (
      <div className={styles.wrap}>
        <div className={classNames({
          [styles.container]: true,
        })}>
          <PlayBoard {...this.props}/>
        </div>
      </div>
    )
  }
}

