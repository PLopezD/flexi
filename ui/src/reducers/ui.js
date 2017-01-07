import * as types from '../actions/types'

export const ui = (state = {
  activeTab: 0,
  loading: false
},
  {type, payload}) => {
  switch (type) {
    case types.CHANGE_TAB:
      return {
        ...state,
        activeTab: payload.activeTab
      }
    case types.LOADING:
      return {
        ...state,
        loading: true
      }
    case types.DONE_LOADING:
      return {
        ...state,
        loading: false
      }
    case types.LOGGED_IN:
      return state
    default:
      return state
  }
}
