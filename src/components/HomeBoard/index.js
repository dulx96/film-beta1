import { connect } from 'react-redux'
import HomeBoard from './HomeBoard'

const mapStateToProp = ({homeBoardReducer: {homeBoardIsActive}}) => (
  {
    homeBoardIsActive,
  }
)
export default connect(mapStateToProp)(HomeBoard)

