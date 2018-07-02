import React from 'react'
import PropTypes from 'prop-types'
//import components
import Category from './Category'
//import plugins
import classNames from 'classnames'
//import styles
import * as styles from './HomeCategory.less'

const HomeCategory = props => {
  const {sb_wd_scrIsActive} = props
  return (
    <div className={classNames({
      [styles.wrap]: true,
      [styles['sb-wd-scr-active']]: sb_wd_scrIsActive,
    })}>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  )

}

HomeCategory.propTypes = {
  sb_wd_scrIsActive: PropTypes.bool,
}

export default HomeCategory
