/* eslint-disable no-console */
import { combineReducers } from 'redux'
import userReducer from './userReducer'
import homeCarouselReducer from './homeCarouselReducer'
import sideBarReducer from './sideBarReducer'
import movieReducer from './movieReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
  userReducer,
  homeCarouselReducer,
  sideBarReducer,
  movieReducer,
  categoryReducer,
})
