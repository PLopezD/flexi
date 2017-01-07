import React, { Component } from 'react'
import { View, Text, StyleSheet, NativeModules } from 'react-native'

import moment from 'moment';

import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');

export class UploadHolder extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>
          Workout for {moment().format('MM/DD/YYYY')}
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
