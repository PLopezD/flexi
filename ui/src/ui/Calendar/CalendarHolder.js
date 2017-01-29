import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Calendar from 'react-native-calendar'
import Dimensions from 'Dimensions';

import { WorkoutPhotos } from './WorkoutPhotos'

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var {height, width} = Dimensions.get('window');

export class CalendarHolder extends Component {
  constructor () {
    super()
  }
  componentWillMount() {
    this.getDaysWorkouts(new Date().toISOString())
  }

  getDaysWorkouts(date) {
    this.props.setSelectedDate(date)
    this.props.getWorkouts(date)
  }
  generateWorkoutEvents() {
    let workoutBubbles = []
    if (this.props.workouts) {
      this.props.workouts.forEach(workout => {
        if (workout.user.email === this.props.user.email) {
          workoutBubbles.push({date:workout.date, hasEventCircle: {backgroundColor: 'powderblue'}})
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
    flex:1
  }
})