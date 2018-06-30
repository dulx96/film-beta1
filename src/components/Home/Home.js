import React from 'react'

//import component
import HomeCarousel from '../HomeCarousel/'
import HomeBoard from '../HomeBoard'

//import style
import * as style from './Home.less'

class Home extends React.Component {
  render () {
    return (
      <div>
        <HomeCarousel />
        <HomeBoard />
      </div>
    )
  }
}

export default Home
