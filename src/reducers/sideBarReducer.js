import * as actions from '../constants/actionTypes'
import * as responsive from '../constants/responsive'

export default (
  state = {sb_sml_scrIsActive: false, sb_wd_scrIsActive: true}, action) => {
  switch (action.type) {
    case actions.TOGGLE_SIDEBAR: {
      let sb_wd_scrIsActive = state.sb_wd_scrIsActive
      let sb_sml_scrIsActive = state.sb_sml_scrIsActive
      if (action.screenWidth >
        responsive.sideBarSwitchPoint) {
        sb_wd_scrIsActive = !sb_wd_scrIsActive
      } else {
        sb_sml_scrIsActive = !sb_sml_scrIsActive
      }

      return {
        ...state,
        sb_wd_scrIsActive,
        sb_sml_scrIsActive,

      }
    }
    default:
      return state
  }
}
