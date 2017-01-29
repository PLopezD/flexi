import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
 Text,
 View,
 StyleSheet
} from 'react-native'

import { CalendarHolder } from '../ui'
import { setSelectedDate, calendarLoad, setImageSource, setCalendarModalVisibility } from '../actions/actions'
import { getWorkouts } from '../actions/standardAsyncActions'

import Dimensions from 'Dimensions';

let {height, width} = Dimensions.get('window');

export class Container extends Component {
  constructor () {
    super()
  }
  componentDidMount() {
    this.props.calendarLoad(true);
  }

  render () {
    return (
      <View style={styles.container}>
        <CalendarHolder {...this.props}/>
      </View>
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  setSelectedDate(date) {
    return dispatch(setSelectedDate(date))
  },
  calendarLoad(date) {
    return dispatch(calendarLoad(date))
  },
  getWorkouts(date) {
    return dispatch(getWorkouts(date))
  },
  // interesting paradigm here 
  setModalVisibility(bool) {
    return dispatch(setCalendarModalVisibility(bool))
  },
  setImageSource(imageSrc) {
    return dispatch(setImageSource(imageSrc))
  }
})

const mapStateToProps = (state) => ({
  date: state.calendar.selectedDate,
  loading: state.calendar.loading,
  selectedDateWorkouts: state.calendar.selectedDateWorkouts,
  workouts: state.main.workouts,
  user: state.user,
  imageSrc: state.ui.imageSrc,
  modalVisibility:state.calendar.modalVisibility
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const CalendarTab = connect(mapStateToProps, mapActionsToProps)(Container)
