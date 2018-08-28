import React from 'react'
import * as styles from './MovieCardNonMobile.less'
import { Link } from 'react-router-dom'
import { IconPlay } from '../Styles/Icons'
import classNames from 'classnames'
import CDN from '../../constants/cdn'
import {convertToUrl} from 'utils'

export default class MovieCardNonMobile extends React.PureComponent {

  render () {
    const idURL = convertToUrl(this.props.titles.romaji, this.props._id)
    const bgImg = {backgroundImage: `url(${CDN + '/' + idURL + '/ss-1/thumbnail_small.jpg'}`}
    return (
      <div className={styles.wrap}>
        <div className={styles['wrap-thumbnail']}>
          <div className={styles.thumbnail} style={bgImg} />
        </div>
        <Link to={'/movie/play/' + idURL}>
          <IconPlay className={styles['play-icon']}
                    size={80} />
        </Link>
        <div className={styles.info}>
          <h3>{this.props.titles.romaji}</h3>

          <div className={styles['rate-and-views']}>
            <p>9.1</p>
            <span>1024 views</span>
          </div>
          <div className={styles.sub}>
            {['Vi', 'Ja', 'En'].map(
              (e, index) => <div><i key={index}> {e} </i></div>)}
          </div>
        </div>

        <div className={classNames({
          [styles.level]: true,
          [styles['impress-div']]: true,
        })}>
          <span>N3</span>
        </div>
      </div>

    )
  }
}
