import * as actions from '../constants/actionTypes'

export const getHomeCarouselSuccess = (data) => (
  {
    type: actions.GET_CAROUSEL_SUCCESS
    , data,
  }
)
export const getHomeCarousel = () => dispatch => {
  const initialState = [
    {
      imageId: 'slide11.jpg',
      title: 'The Return Of Night Fury',
      views: 1000,
      details: 'It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong',
      sub: ['VI', 'EN'],
    },
    {
      imageId: 'slide12.jpg',
      title: 'Attack on Titan',
      views: 2000,
      details: 'It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong',
      sub: ['VI', 'EN', 'JA'],
    },
    {
      imageId: 'slide13.jpg',
      title: 'Conan the Pigs',
      views: 3000,
      details: 'It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong',
      sub: ['VI', 'EN'],
    },
    {
      imageId: 'slide14.jpg',
      title: 'The Return Of Night Fury',
      views: 1000,
      details: 'It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong',
      sub: ['VI', 'EN', 'JA'],
    },
    {
      imageId: 'slide15.jpg',
      title: 'Beautiful Life',
      views: 5000,
      details: 'It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong',
      sub: ['VI', 'JA'],
    },
  ]

  dispatch(getHomeCarouselSuccess(initialState))
}
