import React from 'react'
import windowSize from 'react-window-size'

//import component
import HomeCarousel from '../HomeCarousel/'
//import style
import * as style from './Home.less'

class Home extends React.Component {
  render () {
    return (
      <div>
        <HomeCarousel screenWidth={this.props.windowWidth} />
      </div>
    )
  }
}

export default windowSize(Home)
