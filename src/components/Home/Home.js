import React from 'react'
import PropTypes from 'prop-types'
//import component
import HomeCarousel from './HomeCarousel/'
import HomeBoard from './HomeBoard'

//import style
import * as styles from './Home.less'

class Home extends React.Component {
  render () {
    return (
      <div className={styles.wrap}>
        <HomeCarousel />
        {/*<HomeBoard />*/}
      </div>
    )
  }
}

Home.propTypes = {
}

export default Home
