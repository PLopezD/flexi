import * as types from '../actions/types'

export const calendar = (state = {
  loading: false
},
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
    case types.STORE_USER_WORKOUTS:
      return {
        ...state,
        userWorkouts: payload
      }
    case types.STORE_SELECTED_DATE_WORKOUTS: 
      return  {
        ...state,
        selectedDateWorkouts: payload 
      }
    default:
      return state
  }
}
