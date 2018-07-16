import * as actions from '../constants/actionTypes'
import { CAT_LIST } from '../constants/categoryName'
//khoi tao so cat
const CAT = CAT_LIST.map(
  cat => ({name: cat, getCategoryDataSuccess: false, data: []}))
export default (state = {CAT: CAT}, action) => {
  switch (action.type) {
    case actions.GET_CATEGORY_DATA_SUCCESS: {
      let catIndex = CAT_LIST.findIndex((cat) => cat === action.name)
      let newCatAtIndex = {
        name: action.name,
        getCategoryDataSuccess: true,
        data: action.data,
      }
      let newCAT = [
        ...state.CAT.slice(0, catIndex),
        newCatAtIndex,
        ...state.CAT.slice(catIndex, state.CAT.length - 1)]
      return {
        ...state,
        CAT: newCAT,
      }
    }
    default:
      return state
  }
}
