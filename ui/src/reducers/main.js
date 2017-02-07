import * as types from '../actions/types'
import { main as initialState } from '../initialState'

export const main = (state = initialState,
  {type, payload}) => {
  switch (type) {
    case types.STORE_CONFIG:
      return {
        ...state,
        config: payload
      }
    case types.STORE_WORKOUTS:
      return {
        ...state,
        workouts: payload
      }
    case types.SET_TOTAL_WORKOUT_DAYS:
      return {
        ...state,
        totalWorkoutDays: payload
      }
    case types.STORE_USERS:
      return {
        ...state,
        users: payload
      }
    case types.STORE_SCOREBOARD:
      return {
        ...state,
        scoreboard: payload
      }
    default:
      return state
  }
}
