import React from 'react'
import PropTypes from 'prop-types'
//import component
import PlayBoard from '../PlayBoard'
//import styles
import * as styles from './MoviePlayPage.less'

export default class MoviePlayPage extends React.PureComponent {
  render () {
    return (
      <div className={styles.wrap}>
        <div className={styles.container}>
          <PlayBoard />
        </div>
      </div>
    )
  }
}

