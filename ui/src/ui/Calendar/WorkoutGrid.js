import React, { Component } from 'react'
import PhotoGrid from 'react-native-photo-grid';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Image from 'react-native-image-progress';
import {PhotoItem} from './PhotoItem'

let {height, width} = Dimensions.get('window');


export class WorkoutGrid extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <PhotoGrid
        data = { this.props.selectedDateWorkouts }
        itemsPerRow = { 3 }
        itemMargin = { 2 }
        renderItem = { this.renderItem.bind(this) }
      />
    );
  }

  renderItem(item, itemSize) {
    return <PhotoItem key={item._id} item={item} itemSize={itemSize} {...this.props}/>
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexBasis: 1,
  }
})