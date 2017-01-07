import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
 Text,
 View,
 StyleSheet
} from 'react-native'

import { CalendarHolder } from '../ui/CalendarHolder'

import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');

export class Container extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <View style={styles.container}>
        <CalendarHolder />
      </View>
    )
  }
}

const mapActionsToProps = (dispatch) => ({})

const mapStateToProps = (state) => ({})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const CalendarTab = connect(mapStateToProps, mapActionsToProps)(Container)
