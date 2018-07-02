import React from 'react'
import PropTypes from 'prop-types'
//import components
import { MovieCard } from '../CardItem/'
//import styles
import * as styles from './Category.less'

class Category extends React.Component {
  render () {
    return (
      <div className={styles.wrap}>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    )
  }
}

Category.propTypes = {}

export default Category
