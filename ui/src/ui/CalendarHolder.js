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
      selectedDate: moment().format()
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Calendar
          ref="calendar"
          eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
          events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
          showControls
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={(date) => this.setState({ selectedDate: date })}
          weekStart={0}
          dayHeadings={customDayHeadings}
        />
        <Text>
          {this.state.selectedDate}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})