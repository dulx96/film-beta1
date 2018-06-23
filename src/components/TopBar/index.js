import { connect } from 'react-redux'
import TopBar from './TopBar'
const mapStateToProps = ({userReducer}) => (
  {
    userReducer
  }
)
export default connect(mapStateToProps)(TopBar)