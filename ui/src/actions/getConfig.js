import { createAction } from 'redux-actions'
import moment from 'moment'
import weekend from 'moment-weekend'


import * as api from '../services/api'
import * as types from './types'

export const getConfig = () => (
  dispatch => {
    const storeConfig = createAction(types.STORE_CONFIG)
    const storeWorkoutTotal = createAction(types.SET_TOTAL_WORKOUT_DAYS)
    configGetRequest().then(config => {
        dispatch(storeConfig(config))
        const totalWorkoutDays = storeTotalDays(config.startDate)
        dispatch(storeWorkoutTotal(totalWorkoutDays))
      }
    )
  }
)

const configGetRequest = () => (
  api.get('api/config')
)

const storeTotalDays = (startDate) => {
  let start = moment(startDate, 'YYYY-MM-DD')
  let result = weekend.diff(start, moment(new Date()))
  return result
}