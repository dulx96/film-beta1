import { connect } from 'react-redux'
import PlayPage from './PlayPage'
import { getMoviePlayData } from '../../actions/movieActions'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({movieReducer}) => (
  {
    getMoviePlayDataSuccess: movieReducer.getMoviePlayDataSuccess,
    moviePlayData: movieReducer.moviePlayData,
  }
)
const mapDispatchToProps = dispatch => bindActionCreators({
  getMoviePlayData,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PlayPage)
