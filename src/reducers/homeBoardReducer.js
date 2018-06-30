import * as actions from '../constants/actionTypes'

export default (state = {homeBoardIsActive: false}, action) => {
  switch (action.type) {
    case actions.TOGGLE_HOME_BOARD:
      return {
        ...state,
        homeBoardIsActive: !state.homeBoardIsActive,
      }
    default:
      return state
  }

}
