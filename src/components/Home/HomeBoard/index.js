import { connect } from 'react-redux'
import HomeBoard from './HomeBoard'
import { bindActionCreators } from 'redux'

const mapStateToProp = ({ sideBarReducer: {sb_wd_scrIsActive}}) => (
  {
    sb_wd_scrIsActive,
  }
)
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)
export default connect(mapStateToProp,mapDispatchToProps)(HomeBoard)

