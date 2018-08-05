import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleSideBar } from '../../actions/siderBarActions'
import TopBar from './TopBar'

const mapStateToProps = ({userReducer}) => (
  {
    userReducer,
  }
)

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleSideBar,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
