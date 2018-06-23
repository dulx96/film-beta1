import * as actions from '../constants/actions'

const userReducer = (state = {user : {ava : 't la du'},fetchUserSuccess: false}, action) => {
  switch (action.type) {
    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        fetchUserSuccess: true
      }
    default:
      return state
  }
}
export default userReducer