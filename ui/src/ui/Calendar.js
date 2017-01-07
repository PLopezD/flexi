import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Calendar from 'react-native-calendar'

import moment from 'moment';

import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');

export class CalendarHolder extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Calendar
          ref="calendar"
          eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
          events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
          scrollEnabled
          showControls
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={(date) => this.setState({ selectedDate: date })}
          onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
          onTouchNext={(e) => console.log('onTouchNext: ', e)}
          onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
          onSwipeNext={(e) => console.log('onSwipeNext', e)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})