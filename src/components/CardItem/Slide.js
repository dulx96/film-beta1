import PropTypes from 'prop-types'
import React from 'react'
// import components
//import constant
import CDN from '../../constants/cdn'
//import styles
import * as styles from './Slide.less'

class Slide extends React.PureComponent {
  render () {
    const bgImg = {backgroundImage: `url(${CDN + this.props.imageId})`}
    return (
      <div className={styles.wrap}>
        <div className={styles.container} style={bgImg}>
        </div>
      </div>
    )
  }
}

Slide.propTypes = {
  imageId: PropTypes.string,

}
export default Slide
