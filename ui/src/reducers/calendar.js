import * as types from '../actions/types'

export const calendar = (state = {
  activeTab: 0,
  loading: false
},
  {type, payload}) => {
  switch (type) {
    case types.CALENDAR_LOAD:
      return {
        ...state,
        calendarLoad: payload
      }
    default:
      return state
  }
}
