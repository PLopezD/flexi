import * as types from '../actions/types'
import { upload as initialState } from '../initialState'

export const upload = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOADING:
      return {
        ...state,
        loading: payload
      }
    case types.SET_MODAL_VISIBILITY:
      return {
        ...state,
        modalVisibility: payload
      }
    default:
      return state
  }
}
