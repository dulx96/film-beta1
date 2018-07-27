import { connect } from 'react-redux'
import PlayPage from './PlayPage'
import {
  getMoviePlayData,
  getMoviePlayDataFailed,
} from '../../actions/movieActions'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({movieReducer}) => (
  {
    getMoviePlayDataSuccess: movieReducer.getMoviePlayDataSuccess,
    moviePlayData: movieReducer.moviePlayData,
  }
)
const mapDispatchToProps = dispatch => bindActionCreators({
  getMoviePlayData, getMoviePlayDataFailed,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PlayPage)
