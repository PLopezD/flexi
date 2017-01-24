import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Calendar from 'react-native-calendar'

import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');

export class CalendarHolder extends Component {
  constructor () {
    super()
    this.state = {
      selectedDate: moment().format('L')
    }
  }
  componentDidMount() {
    this.getWorkoutEvents()
    this.getTodaysWorkouts(this.state.selectedDate)
  }
  getTodaysWorkouts(date) {
    let form = moment(date).format('L')
    this.setState({selectedDate: form})
  }
  
  getWorkoutEvents() {
    console.log("msg")
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
        <Text>
          {this.state.selectedDate}
        </Text>
      </View>
    )
  }
  generateWorkoutEvents() {
    return [{date: '2017-01-04', hasEventCircle: {backgroundColor: 'powderblue'}},{date: '2017-01-07', hasEventCircle: {backgroundColor: 'powderblue'}}]
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})