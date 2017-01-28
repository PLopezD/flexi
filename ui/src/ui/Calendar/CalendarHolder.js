import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Calendar from 'react-native-calendar'
import Dimensions from 'Dimensions';

import { WorkoutPhotos } from './WorkoutPhotos'
import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var {height, width} = Dimensions.get('window');

export class CalendarHolder extends Component {
  constructor () {
    super()
  }
  componentWillMount() {
    this.getWorkoutEvents()
    this.getTodaysWorkouts(new Date().toISOString())
  }
  
  getTodaysWorkouts(date) {
    this.props.setSelectedDate(date)
    this.props.getWorkouts(date)
    this.props.getWorkouts(this.props.user)
  }
  
  getWorkoutEvents() {
  }
  generateWorkoutEvents() {
    return [{date: '2017-01-04', hasEventCircle: {backgroundColor: 'powderblue'}},{date: '2017-01-07', hasEventCircle: {backgroundColor: 'powderblue'}}]
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
          onDateSelect={(date) => this.getTodaysWorkouts(date)}
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