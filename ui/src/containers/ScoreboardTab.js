import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
 Text,
 View,
 StyleSheet
} from 'react-native'
import moment from 'moment';
import weekend from 'moment-weekend';
import { setTotalWorkoutDays } from '../actions/actions'

export class Container extends Component {
  constructor () {
    super()
  }
  componentWillReceiveProps() {
    let start = moment(this.props.startDate, "YYYY-MM-DD")
    let result = weekend.diff(start, moment(new Date())); 
    this.props.setTotalWorkoutDays(result)
  }
  render () {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={{fontSize: 20}}>{this.props.totalWorkoutDays}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  setTotalWorkoutDays(result) {
    return dispatch(setTotalWorkoutDays(result))
  }
})

const mapStateToProps = (state) => ({
    startDate: state.main.config.startDate,
    totalWorkoutDays: state.main.totalWorkoutDays
  }
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    flex: 1,
    marginTop: 100,
    flexBasis: 1,
    flexGrow: 1
  }
})

export const ScoreboardTab = connect(mapStateToProps, mapActionsToProps)(Container)
