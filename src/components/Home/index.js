import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from './Home'

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)
export default connect(undefined,mapDispatchToProps)(Home)
