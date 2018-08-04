import React from 'react'
import * as styles from './MovieCardMobile.less'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import CDN from '../../constants/cdn'

export default class MovieCardMobile extends React.Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    const bgImg = {backgroundImage: `url(${CDN + '/images/poster3.jpg'}`}
    return (
      <div className={styles.wrap}>
        <div className={styles.container} style={bgImg}>
          <Link to='/movie/play' className={styles['play-touch-area']} />
          <div className={styles.info}>
            <h3>{this.props.titles.romaji}</h3>
            <div className={styles.sub}>
              {['Vi', 'Ja'].map(
                (e, index) => <div><i key={index}> {e} </i></div>)}
            </div>
          </div>
          <div className={classNames({
            [styles.details]: true,
            [styles['impress-div']]: true,
          })}>
          <span>
            9.1
          </span>
          </div>
          <div className={classNames({
            [styles.views]: true,
            [styles['impress-div']]: true,
          })}>
            <p>
              1204 <br />
              <span>
              xem
            </span>
            </p>
          </div>
          <div className={classNames({
            [styles.level]: true,
            [styles['impress-div']]: true,
          })}>
            <span>N3</span>
          </div>
        </div>
      </div>

    )
  }
}
