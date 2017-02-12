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
  totalWorkoutDays: state.main.totalWorkoutDays,
  scoreboard: state.main.scoreboard,
  users: state.main.users,
  workouts: state.main.workouts
})

export const ScoreboardTab = connect(mapStateToProps, mapActionsToProps)(Container)

Container.propTypes = {
  startDate: React.PropTypes.string,
  setTotalWorkoutDays: React.PropTypes.func
}
