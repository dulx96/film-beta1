// @flow
import React, { Component } from 'react'

//import components
import { HomeSlide } from '../CardItem'
//import plugins
import Slider from 'react-slick'

// import styles
import * as styles from './HomeCarousel.less'
import './Carousel.css'

type Props = {
  screenWidth: number,
}

class HomeCarousel extends Component<Props> {
  componentWillMount () {
    this.props.getHomeCarousel()
  }

  render () {
    // const imgAdd = require(`../../resources/HomeCarouselImage/${this.props.imgId}`)
    const screenWidth = this.props.screenWidth
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
      <div className={styles.wrap}>
        <div className={styles.content}>
          <Slider {...settings}>
            {data.map((d, index) => <HomeSlide key={index} {...d} />)}
          </Slider>
        </div>
      </div>

    )
  }
}

export default HomeCarousel

