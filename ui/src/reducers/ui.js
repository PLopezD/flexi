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
        activeTab: payload
      }
    case types.LOADING:
      return {
        ...state,
        loading: payload
      }
    case types.LOGGED_IN:
      return state
    default:
      return state
  }
}
