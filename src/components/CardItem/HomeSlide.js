import PropTypes from 'prop-types'
import React from 'react'
// import components
//import constant
import CDN from '../../constants/cdn'
//import styles
import * as styles from './HomeSilde.less'
import { IconImdb } from '../Styles/Icons'
import { IconPlay } from '../Styles/Icons'

class HomeSlide extends React.PureComponent {
  render () {
    return (
      <div className={styles.wrap}>
        <div className={styles.content}>
          <img src={`${CDN + this.props.imageId}`}
               alt={this.props.title} />

          <div className={styles.info}>
            <section>
              <h2>
                {this.props.title}
              </h2>              <div style={{flex: 1}} />
              <div className={styles.imdb}>
                <IconImdb size={60} />
                <p>9.5</p>
              </div>
            </section>
            <p>
              {this.props.details}
            </p>
            <div style={{flex: 1}} />
            <p>Phụ đề:</p>
            <div className={styles.sub}>
              {['V', 'J', 'E'].map(
                (e, index) => <div><i key={index}> {e} </i></div>)}
            </div>
            <div className={styles.options}>
              <a>
                Chi tiết
              </a>
              <a>
                <IconPlay size={40} />
                <span>Xem Phim</span>
              </a>
            </div>


          </div>
        </div>
      </div>
    )
  }
}

HomeSlide.propTypes = {
  imageId: PropTypes.string,
  title: PropTypes.string,
  star: PropTypes.number,
  views: PropTypes.number,
  details: PropTypes.string,
  sub: PropTypes.array,
}
export default HomeSlide
