import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHomeCarousel } from '../../actions/homeCarouselActions'
import { toggleHomeBoard} from '../../actions/homeBoardActions'
import HomeCarousel from './HomeCarousel'

const mapStateToProps = ({homeCarouselReducer: {data, getHomeCarouselSuccess}}) => (
  {
    data: getHomeCarouselSuccess ? data : [],
  }
)
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getHomeCarousel,
    toggleHomeBoard
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeCarousel)
