import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import components
import IconStar from 'react-icons/lib/ti/star'
//import styles
import * as styles from './HomeSilde.less'

const HomeSlide = props => {
  const imageAdd = require(`../../resources/Slide/${props.imageId}`)
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.image}
             style={{backgroundImage: `url(${imageAdd})`}}>
          <a>

          </a>
        </div>

        <div className={styles.info}>
          <h2>
            {props.title}
          </h2>
          <div className={styles.star}>
            <IconStar size={20} />
            <IconStar size={20} />
            <IconStar size={20} />
            <IconStar size={20} />
            <IconStar size={20} />
            <p>{props.views} Views</p>
          </div>
          <p className={styles.details}>
            {props.details}
          </p>
          <div style={{flex: 1}} />
          <div className={styles.sub}>
            <h3>Subtitle:</h3>
            {props.sub.map((e, index) => <i key={index}> {e} </i>)}
          </div>
          <div className={styles.options}>
            <a className={styles['more-details']}>
              Details
            </a>
            <a className={styles.play}>
              Play
            </a>
          </div>


        </div>
      </div>
    </div>
  )
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