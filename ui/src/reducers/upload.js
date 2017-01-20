import * as types from '../actions/types'
import { user as initialState } from '../initialState'

export const upload = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_MODAL_VISIBILITY:
      return {
        ...state,
        uploadModal: payload
      }
    default:
      return state
  }
}
