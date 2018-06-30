import * as actions from '../constants/actionTypes'

export const toggleSideBar = (screenWidth) => ({
  type: actions.TOGGLE_SIDEBAR,
  screenWidth
})
