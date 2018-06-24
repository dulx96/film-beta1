import * as actions from '../constants/actions'

const homeCarouselReducer = (state = {}, action) => {
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
export default homeCarouselReducer