import React from 'react'
import PropTypes from 'prop-types'
//import components
import Category from './Category'
//import plugins
import classNames from 'classnames'
//import constant
import { CAT_LIST } from '../../../constants/categoryName'
//import styles
import * as styles from './HomeCategory.less'

class HomeCategory extends React.Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    let CategoryComponentArray = CAT_LIST.map(
      (cat, index) => <Category key={index} catName={cat} />)
    return (
      <div className={classNames({
        [styles.wrap]: true,
      })}>
        {CategoryComponentArray}
      </div>
    )
  }
}

HomeCategory.propTypes = {}

export default HomeCategory
