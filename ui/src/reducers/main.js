import * as types from '../actions/types'

export const main = (state = {},
  {type, payload}) => {
  switch (type) {
    case types.STORE_CONFIG:
      return {
        ...state,
        config: payload
      }
    default:
      return state
  }
}
