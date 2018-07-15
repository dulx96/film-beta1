import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//import component
import { IconPlay } from '../Styles/Icons'
//import plugins
import classNames from 'classnames'
//import style
import * as styles from './MovieCard.less'

class MovieCard extends React.PureComponent {
  render () {
    return (
      <div className={styles.wrap}>
        <img src='http://cdn.ekiio.com/images/slide14.jpg'
             alt={this.props.title_en} />
        <Link to='/movie/play'>
          <IconPlay className={styles['play-icon']}
                    size={80} />
        </Link>
        <div className={styles.info}>
          <h3>{this.props.title_en}</h3>
          <p>{['Actions', 'Adventure'].join(', ')}</p>
          <section>
            <p className={styles['imdb-score']}>
              9.1
            </p>
            <span>121.444 views</span>
          </section>

        </div>
        <div className={styles.sub}>
          {['V', 'J', 'E'].map(
            (e, index) => <div><i key={index}> {e} </i></div>)}
        </div>
        <div className={classNames({
          [styles.details]: true,
          [styles['impress-div']]: true,
        })}>
          <span>
            Chi tiết
          </span>
        </div>
        <div className={classNames({
          [styles.level]: true,
          [styles['impress-div']]: true,
        })}>
          <span>JLPT N3</span>
        </div>
      </div>
    )
  }
}

export default MovieCard
MovieCard.propTypes = {
  title_en: PropTypes.string,
  title_jp: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  category: PropTypes.array,
  length: PropTypes.number,
  level: PropTypes.string,
}
