import * as actions from '../constants/actionTypes'

export default (state = {getMoviePlayDataSuccess: false}, action) => {
  switch (action.type) {
    case actions.GET_MOVIE_PLAY_DATA_SUCCESS:
      return {
        ...state,
        getMoviePlayDataSuccess: true,
        moviePlayData: action.data,
      }
    case actions.GET_MOVIE_PLAY_DATA_FAILED:
      return {
        ...state,
        getMoviePlayDataSuccess: false
      }
    default:
      return state
  }
}
