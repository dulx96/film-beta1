import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategoryData } from '../../../../actions/categoryActions'
import Category from './Category'

const mapStateToProp = ({categoryReducer}) => (
  {
    ...categoryReducer
  }
)
const mapDispatchToProps = dispatch => bindActionCreators({
  getCategoryData,
}, dispatch)
export default connect(mapStateToProp, mapDispatchToProps)(Category)
