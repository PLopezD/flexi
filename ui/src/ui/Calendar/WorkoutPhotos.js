import React, { Component } from 'react'
import * as globalStyles from '../../styles'
import { Text, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
let {height, width} = Dimensions.get('window');
import { WorkoutGrid } from './WorkoutGrid'

export class WorkoutPhotos extends Component {
  render() {
    let render = <ActivityIndicator animating={true} style={{height: 80, paddingTop:100}} size="large"/>
    if (!this.props.loading && this.props.selectedDateWorkouts) {
      render = (<WorkoutGrid {...this.props}/>)
    }
    return (
      <View style={styles.container}>
        {render}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    flex:1
  }
})