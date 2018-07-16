import * as actions from '../constants/actionTypes'
import { CAT_LIST } from '../constants/categoryName'

const cat1DataMock = [
  {
    id: 123,
    title_jp: 'deo biet',
    title_en: 'Shingeki No Kyoujin',
    category: ['actions', 'humor'],
    length: 12,
    level: 'JLPT N2',

  },
  {
    id: 123,
    title_jp: 'sontung-mtp',
    title_en: 'hot dog',
    category: ['actions', 'humor'],
    length: 12,
    level: 2,
  },
  {
    id: 123,
    title_jp: 'sontung-mtp',
    title_en: 'hot dog',
    category: ['actions', 'humor'],
    length: 12,
    level: 2,
  },
  {
    id: 123,
    title_jp: 'sontung-mtp',
    title_en: 'hot dog',
    category: ['actions', 'humor'],
    length: 12,
    level: 2,
  },
  {
    id: 123,
    title_jp: 'sontung-mtp',
    title_en: 'hot dog',
    category: ['actions', 'humor'],
    length: 12,
    level: 2,
  },
  {
    id: 123,
    title_jp: 'sontung-mtp',
    title_en: 'hot dog',
    category: ['actions', 'humor'],
    length: 12,
    level: 2,
  },

]
const query = `{
 moviespaginated(count: 5, page: 2){
   movies{
     titles{
       romaji
       original
     }
     seasons{
       season
     }
   }
 }
}`

export const getCategoryDataSuccess = (name, data) => ({
  type: actions.GET_CATEGORY_DATA_SUCCESS,
  name,
  data,
})
export const getCategoryData = (name) => dispatch =>
  fetch('http://35.236.172.71:8000/api', {
    method: 'POST',
    body: JSON.stringify({query: query}),
    headers: {'Content-Type': 'application/json'},
  })
    .then(res => res.json())
    .then(data => dispatch(getCategoryDataSuccess(name, data.data.moviespaginated.movies)))
