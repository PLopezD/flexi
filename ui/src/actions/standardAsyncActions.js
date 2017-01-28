import { createAction } from 'redux-actions'

import * as api from '../services/api'
import * as types from './types'

export const getWorkouts = (params) => (
  dispatch => {
    let query = {date:params}
    let storeWorkouts = createAction(types.STORE_SELECTED_DATE_WORKOUTS)
    if (params.email) {
      storeWorkouts = createAction(types.STORE_USER_WORKOUTS)
      query = {user: params.email}
    }
    dispatch(createAction(types.CALENDAR_LOAD)(true))
    const finishLoad = createAction(types.CALENDAR_LOAD)

    fetchWorkouts(query).then(workouts => {
        dispatch(storeWorkouts(workouts))
        dispatch(finishLoad(false))
      }
    )
    .catch(err => dispatch(finishLoad(false)))
  }
)

const fetchWorkouts = (query) => {
  let queryString = api.generateQueryString(query)
  return api.get(`api/workouts?${queryString}`) 
}
