import * as actions from '../constants/actionTypes'
import API_DOMAIN from '../constants/api'

const query = `{
 moviespaginated(count: 12, page: 1){
   movies{
     titles{
       romaji
       original
     }
     _id
   }
 }
}`

const movieDataPlayMocks = {
  title: 'sontung-mtp',
  eps: '1',
  espSum: '21',
  OriVideoSrc: 'https://lh3.googleusercontent.com/tYNW7gMpV5V0W87iogLKDhJXySzUNanWaH8d_EZhRps3EuyLFdV9cQxaCeOOPnNjtvksbjyEnNEMvG-3mWHI_P3vfLqU5X5ysIlAuSOd7lEvZGKtkknsEGRYGJMF3OSjZF-cQfbW=w600-h315-k-no-m18',
  ViVideoSrc: 'https://lh3.googleusercontent.com/kMCqKzdGU_McxkYrkYuwJw3pa_Cz-kluTxtx4kqUQfj6V9klTjTXry70U3mPjjAG4KWWlz9SK1ACSOLcVA=m22',
  JASubSrc: '/sub/text1.txt',
}
const movieDetailsMock = {
  id: '123456',
  title: 'sontung-mtp',
  descriptions: 'oppo, bitis-hunter, sky',
  movieInfo: {
    genre: '',
    actor: '',
  },
  subAvaiableList: ['en', 'vi', 'ja'],
  thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  posterUrl: '/movie/id/images/poster.jpg',
}
export const getMoviePlayDataSuccess = (data) => (
  {
    type: actions.GET_MOVIE_PLAY_DATA_SUCCESS,
    data,
  }
)
export const getMoviePlayDataFailed = () => (
  {
    type: actions.GET_MOVIE_PLAY_DATA_FAILED,
  }
)

export const getMoviePlayData = (id) => dispatch => {
  const query = `{movies(_id:"${id}") {
  seasons(season:1) {
    episodes(episode:1) {
      videos {
        original_gg
        original_fb
        vietsub_gg
        vietsub_fb
      }
    }
  }
}}`
  fetch(API_DOMAIN, {
    method: 'POST',
    body: JSON.stringify({query: query}),
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())
    .then(data => dispatch(
      getMoviePlayDataSuccess(data),
    ))
}
export const getMovieDetailsDataSuccess = (data) => (
  {
    type: actions.GET_MOVIE_DETAILS_DATA_SUCCESS,
    data,
  }
)
export const getMovieDetailsData = (id) => dispatch =>
  dispatch(getMovieDetailsDataSuccess(movieDetailsMock))
