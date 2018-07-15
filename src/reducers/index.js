/* eslint-disable no-console */
import { combineReducers } from 'redux'
import userReducer from './userReducer'
import homeCarouselReducer from './homeCarouselReducer'
import homeBoardReducer from './homeBoardReducer'
import sideBarReducer from './sideBarReducer'
import movieReducer from './movieReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({
  userReducer,
  homeCarouselReducer,
  homeBoardReducer,
  sideBarReducer,
  movieReducer,
  categoryReducer,
})
