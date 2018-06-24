import { combineReducers } from 'redux'
import userReducer  from './userReducer'
import homeCarouselReducer from './homeCarouselReducer'

export default combineReducers({
  userReducer,
  homeCarouselReducer
})