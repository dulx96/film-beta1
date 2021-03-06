import * as actions from '../constants/actionTypes'

export default  (state = {}, action) => {
  switch (action.type) {
    case actions.GET_CAROUSEL_SUCCESS:
      return {
        ...state,
        data: action.data,
        getHomeCarouselSuccess: true,
      }
    default:
      return state
  }
}
