import React, { Component } from 'react'
import PhotoGrid from 'react-native-photo-grid';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Image from 'react-native-image-progress';

let {height, width} = Dimensions.get('window');


export class WorkoutGrid extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    let items = Array.apply(null, this.props.selectedDateWorkouts).map((v, i) => {
      return { id: i, src: v.picUrl}
    });
    this.setState({ items });
  }

  render() {
    return(
      <PhotoGrid
        data = { this.state.items }
        itemsPerRow = { 3 }
        itemMargin = { 2 }
        renderItem = { this.renderItem }
      />
    );
  }

  renderItem(item, itemSize) {
    console.log(item)
    return(
      <TouchableOpacity
        key = { item.id }
        style = {{ width: itemSize, height: itemSize }}
        onPress = { () => {
          // Do Something
        }}>
        <Image
          resizeMode = "cover"
          style = {{ flex: 1 }}
          source = {{ uri: item.src }}
        />
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexBasis: 1,
  }
})