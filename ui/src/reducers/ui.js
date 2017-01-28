import * as types from '../actions/types'

export const ui = (state = {
  activeTab: 2,
  loading: false,
  imageSrc: {activeImage:false}
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
    case types.SET_IMAGE_SOURCE:
      return {
        ...state,
        imageSrc: payload
      }
    case types.LOGGED_IN:
      return state
    default:
      return state
  }
}
