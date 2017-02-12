import * as types from '../actions/types'
import { calendar as initialState } from '../initialState'

export const calendar = (state = initialState,
  {type, payload}) => {
  switch (type) {
    case types.CALENDAR_LOAD:
      return {
        ...state,
        loading: payload
      }
    case types.SELECT_DATE:
      return {
        ...state,
        selectedDate: payload
      }
    case types.STORE_SELECTED_DATE_WORKOUTS:
      return {
        ...state,
        selectedDateWorkouts: payload
      }
    case types.CALENDAR_MODAL_VISIBILITY:
      return {
        ...state,
        modalVisibility: payload
      }
    default:
      return state
  }
}
