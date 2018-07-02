import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleHomeBoard } from '../../actions/homeBoardActions'
import Home from './Home'

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleHomeBoard,
}, dispatch)
export default connect(undefined,mapDispatchToProps)(Home)
