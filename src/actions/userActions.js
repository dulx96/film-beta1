import * as actions from '../constants/actionTypes'

export const fetchUserSuccess = (user) => {
  return {
    type: actions.FETCH_USER_SUCCESS,
    user,
  }
}
const userDataMock = {ava: '/ava/thoa.jpg'}
export const fetchUser = () => dispatch => {
  dispatch(fetchUserSuccess(userDataMock))
}
