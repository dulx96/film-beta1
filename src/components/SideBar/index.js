import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleSideBar } from '../../actions/siderBarActions'
import SideBar from './SiderBar'

const mapStateToProps = ({sideBarReducer: {sb_sml_scrIsActive, sb_wd_scrIsActive}}) => (
  {
    sb_wd_scrIsActive,
    sb_sml_scrIsActive,
  }
)
const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleSideBar,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
