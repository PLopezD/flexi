import { createAction } from 'redux-actions'

import * as api from '../services/api'
import ScoreboardGenerator from '../services/scoreboardGenerator'
import * as types from './types'

let storeScoreBoard = createAction(types.STORE_SCOREBOARD)

export const getWorkouts = (params) => (
  (dispatch, getState) => {
    let query = { date: params }
    let storeWorkouts = createAction(types.STORE_SELECTED_DATE_WORKOUTS)
    if (!params) {
      storeWorkouts = createAction(types.STORE_WORKOUTS)
      query = {}
    }
    dispatch(createAction(types.CALENDAR_LOAD)(true))
    const finishLoad = createAction(types.CALENDAR_LOAD)
    fetchWorkouts(query).then(workouts => {
      dispatch(storeWorkouts(workouts))
      let scoreboardData = makeScoreboardGeneratorAndScoreboard(getState())
      dispatch(storeScoreBoard(scoreboardData))
      dispatch(finishLoad(false))
    })
    .catch(err =>
      console.log(err),
      dispatch(finishLoad(false)))
  }
)

const fetchWorkouts = (query) => {
  let queryString = api.generateQueryString(query)
  return api.get(`api/workouts?${queryString}`)
}

const makeScoreboardGeneratorAndScoreboard = (stateObject) => {
  let ScoreGenerator = new ScoreboardGenerator(stateObject.main.workouts, stateObject.main.users, stateObject.main.totalWorkoutDays)
  return ScoreGenerator.generateScoreboard() 
}

export const getUsers = () => (
  (dispatch, getState) => {
    let storeUsers = createAction(types.STORE_USERS)
    api.get('api/users').then(users => {
      dispatch(storeUsers(users))
      let scoreboardData = makeScoreboardGeneratorAndScoreboard(getState())
      dispatch(storeScoreBoard(scoreboardData))
    })
  }
)
