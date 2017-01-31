import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
 View
} from 'react-native'
import moment from 'moment'
import weekend from 'moment-weekend'

import { setTotalWorkoutDays } from '../actions/actions'
import { getUsers } from '../actions/standardAsyncActions'
import { ScoreBoardHolder } from '../ui'

export class Container extends Component {
  constructor () {
    super()
  }

  componentWillMount() {
    this.props.getUsers()
  }

  componentDidUpdate () {
    this.setWorkoutTotal()
  }

  setWorkoutTotal () {
    let start = moment(this.props.startDate, 'YYYY-MM-DD')
    let result = weekend.diff(start, moment(new Date()))
    this.props.setTotalWorkoutDays(result)
  }

  render () {
    return (
      <View>
        <ScoreBoardHolder {...this.props}/>
      </View>
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  setTotalWorkoutDays (result) {
    return dispatch(setTotalWorkoutDays(result))
  },
  getUsers() {
    return dispatch(getUsers())
  }
})

const mapStateToProps = (state) => ({
  startDate: state.main.config.startDate,
  totalWorkoutDays: state.main.totalWorkoutDays,
  workouts: state.main.workouts,
  users: state.main.users
})

export const ScoreboardTab = connect(mapStateToProps, mapActionsToProps)(Container)

Container.propTypes = {
  startDate: React.PropTypes.string,
  setTotalWorkoutDays: React.PropTypes.func
}
