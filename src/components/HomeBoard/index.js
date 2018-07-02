import { connect } from 'react-redux'
import HomeBoard from './HomeBoard'
import { toggleHomeBoard } from '../../actions/homeBoardActions'
import { bindActionCreators } from 'redux'

const mapStateToProp = ({homeBoardReducer: {homeBoardIsActive}, sideBarReducer: {sb_wd_scrIsActive}}) => (
  {
    homeBoardIsActive,
    sb_wd_scrIsActive,
  }
)
const mapDispatchToProps = dispatch => bindActionCreators({
  toggleHomeBoard,
}, dispatch)
export default connect(mapStateToProp,mapDispatchToProps)(HomeBoard)

