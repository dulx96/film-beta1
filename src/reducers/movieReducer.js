import * as actions from '../constants/actionTypes'

export default (state = {getMoviePlayDataSuccess: false}, action) => {
  switch (action.type) {
    case actions.GET_MOVIE_PLAY_DATA_SUCCESS:
      return {
        ...state,
        getMoviePlayDataSuccess: true,
        moviePlayData: action.data,
      }
    default:
      return state
  }
}
