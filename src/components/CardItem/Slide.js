import PropTypes from 'prop-types'
import React from 'react'
// import components
//import constant
import CDN from '../../constants/cdn'
//import styles
import * as styles from './Slide.less'

class Slide extends React.PureComponent {
  render () {
    return (
      <div className={styles.wrap}>
        <div className={styles.container}>
          <img src={`${CDN + this.props.imageId}`}
               alt={this.props.title} />
        </div>
      </div>
    )
  }
}

Slide.propTypes = {
  imageId: PropTypes.string,

}
export default Slide
