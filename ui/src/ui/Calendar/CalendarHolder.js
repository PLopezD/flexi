import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Calendar from 'react-native-calendar'

import { WorkoutPhotos } from './WorkoutPhotos'

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export class CalendarHolder extends Component {
  constructor () {
    super()
  }
  componentWillMount () {
    this.getDaysWorkouts(new Date().toISOString())
  }

  getDaysWorkouts (date) {
    this.props.setSelectedDate(date)
    this.props.getWorkouts(date)
  }
  
  generateWorkoutEvents () {
    let workoutBubbles = []
    if (this.props.workouts) {
      let workouts = this.props.workouts
      workouts.forEach(workout => {
        if (workout.user.fbId === this.props.user.fbId) {
          workoutBubbles.push({date: workout.date, hasEventCircle: {backgroundColor: 'powderblue'}})
        }
      })
    }
    return workoutBubbles
  }

  render () {
    return (
      <View style={styles.container}>
        <Calendar
          ref="calendar"
          events={this.generateWorkoutEvents()}
          showControls
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={(date) => this.getDaysWorkouts(date)}
          weekStart={0}
          dayHeadings={customDayHeadings}
        />
        <WorkoutPhotos {...this.props}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

CalendarHolder.propTypes = {
  calendarLoad: React.PropTypes.func,
  getWorkouts: React.PropTypes.func,
  setSelectedDate: React.PropTypes.func,
  user: React.PropTypes.object,
  workouts: React.PropTypes.array
}
