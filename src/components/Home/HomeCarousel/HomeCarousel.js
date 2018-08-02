import React, { Component } from 'react'

//import components
import { Slide } from '../../CardItem/index'
//import plugins
import Slider from 'react-slick'
import windowSize from 'react-window-size'
//import constant
import CDN from '../../../constants/cdn'
// import styles
import * as styles from './HomeCarousel.less'
import './Carousel.css'

class HomeCarousel extends Component {
  componentDidMount () {
    this.props.getHomeCarousel()
  }
  render () {
    const screenWidth = this.props.windowWidth
    let centerPadding = 0
    let scollbarWidth = 17
    if (screenWidth + scollbarWidth >= 1366) {
      centerPadding = `${(screenWidth - 1344 - scollbarWidth) / 2}px`
    }
    else if (screenWidth + scollbarWidth >= 1280) {
      centerPadding = `${(screenWidth - 1120 - scollbarWidth) / 2}px`
    }
    else if (screenWidth + scollbarWidth >= 1024) {
      centerPadding = `${(screenWidth - 896 - scollbarWidth) / 2}px`
    }
    else if (screenWidth + scollbarWidth >= 768) {
      centerPadding = `${(screenWidth - 732 - scollbarWidth) / 2}px`
    }

    const settings = {
      className: 'center',
      dots: true,
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
        // style={{backgroundImage: `url(${CDN + '/images/background.jpg'})`}}
      >
        <div className={styles.content}>
          <Slider {...settings}>
            {data.map((d, index) => <Slide key={index} {...d} />)}
          </Slider>
        </div>
      </div>
    )
  }
}

export default windowSize(HomeCarousel)
