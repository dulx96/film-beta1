import * as actions from '../constants/actionTypes'

export const fetchUserSuccess = (user) => {
  return {
    type: actions.FETCH_USER_SUCCESS,
    user,
  }
}

export const fetchUser = () => dispatch => {
  const user = {ava: 'thoa.jpg'}
  dispatch(fetchUserSuccess(user))
}
