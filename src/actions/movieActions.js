import * as actions from '../constants/actionTypes'

export const getMoviePlayDataSuccess = (data) => (
  {
    type: actions.GET_MOVIE_PLAY_DATA_SUCCESS,
    data,
  }
)
const movieDataPlayMocks = {
  OriVideoSrc: 'https://lh3.googleusercontent.com/tYNW7gMpV5V0W87iogLKDhJXySzUNanWaH8d_EZhRps3EuyLFdV9cQxaCeOOPnNjtvksbjyEnNEMvG-3mWHI_P3vfLqU5X5ysIlAuSOd7lEvZGKtkknsEGRYGJMF3OSjZF-cQfbW=w600-h315-k-no-m18',
  ViVideoSrc: 'https://lh3.googleusercontent.com/kMCqKzdGU_McxkYrkYuwJw3pa_Cz-kluTxtx4kqUQfj6V9klTjTXry70U3mPjjAG4KWWlz9SK1ACSOLcVA=m22',
  JASubSrc: '/sub/text.txt',
}
export const getMoviePlayData = () => dispatch =>
  dispatch(getMoviePlayDataSuccess(movieDataPlayMocks))

