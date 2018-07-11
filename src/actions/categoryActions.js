import * as actions from '../constants/actionTypes'
import * as category from '../constants/categoryName'

const cat1DataMock = [
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },

]
const cat2DataMock = [
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },
  {
    id: '123456',
    title: 'sontung-mtp',
    descriptions: 'oppo, bitis-hunter, sky',
    movieInfo: {
      genre: '',
      actor: '',
    },
    subAvaiableList: ['en', 'vi', 'ja'],
    thumbnailUrl: '/movie/id/images/thumbnail.jpg',
  },

]
export const getCategoryDataSuccess = (name, data) => ({
  type: actions.GET_CATEGORY_DATA_SUCCESS,
  name,
  data,
})
export const getCategoryData = (name) => dispatch =>
  dispatch(getCategoryDataSuccess(name, getDataMock(name)))

function getDataMock (name) {
  switch (name) {
    case category.CAT1:
      return cat1DataMock
    case category.CAT2:
      return cat2DataMock
    default:
      return []
  }
}
