import * as actions from '../constants/actions'

export const fetchUserSuccess = (user) => {
  return {
    type: actions.FETCH_USER_SUCCESS,
    user,
  }
}

export const fetchUser = () => dispatch => {
  const user = {ava: 'https://doc-00-70-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/shirid1b82g6ule26oksctejj1dj6hqj/1529748000000/12373682087207055790/*/16mX4RAP_XZRAiEpgwv33bPKUxuexTLFR'}
  setInterval(() => dispatch(fetchUserSuccess(user)), 2000)
}