import React from 'react'
import PropTypes from 'prop-types'
//import component
import MovieCardNonMobile from './MovieCardNonMobile'
import MovieCardMobile from './MovieCardMobile'
//import plugins
import { WithWindowSize } from '../WindowSize'

//import style

class MovieCard extends React.PureComponent {
  render () {
    return this.props.windowWidth >= 768 ?  <MovieCardNonMobile {...this.props}/>
      : <MovieCardMobile {...this.props} />
  }
}

export default WithWindowSize(MovieCard)
MovieCard.propTypes = {
  title_en: PropTypes.string,
  title_jp: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  category: PropTypes.array,
  length: PropTypes.number,
  level: PropTypes.string,
}
