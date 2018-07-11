import React, { Component } from 'react'

//import components
import { HomeSlide } from '../CardItem'
//import plugins
import Slider from 'react-slick'
import windowSize from 'react-window-size'
//import constant
import CDN from '../../constants/cdn'
// import styles
import * as styles from './HomeCarousel.less'
import './Carousel.css'

class HomeCarousel extends Component {
  componentWillMount () {
    this.props.getHomeCarousel()
  }

  render () {
    const screenWidth = this.props.windowWidth
    let centerPadding = 0
    if (screenWidth > 1600) {
      centerPadding = '350px'
    }
    else if (screenWidth > 1440) {
      centerPadding = '280px'
    }
    else if (screenWidth > 1276) {
      centerPadding = '200px'
    }
    else if (screenWidth > 1024) {
      centerPadding = '140px'
    }

    else if (screenWidth > 960) {
      centerPadding = '100px'
    }
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: centerPadding,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 6000,

      speed: 500,
    }

    const data = this.props.data
    return (
      <div className={styles.wrap}
           style={{backgroundImage: `url(${CDN + '/images/1.jpg'})`}}
           onWheel={() => !this.props.homeBoardIsActive &&
             this.props.toggleHomeBoard()}
      >
        <div className={styles.content}>
          <Slider {...settings}>
            {data.map((d, index) => <HomeSlide key={index} {...d} />)}
          </Slider>
        </div>
        <span className={styles.scroll}
              onClick={() => this.props.toggleHomeBoard()} />
      </div>
    )
  }
}

export default windowSize(HomeCarousel)
