import React, { Component } from 'react'
import PhotoGrid from 'react-native-photo-grid'
import {PhotoItem} from './PhotoItem'

export class WorkoutGrid extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <PhotoGrid
        data = { this.props.selectedDateWorkouts }
        itemsPerRow = { 3 }
        itemMargin = { 2 }
        renderItem = { this.renderItem.bind(this) }
      />
    )
  }

  renderItem (item, itemSize) {
    return <PhotoItem key={item._id} item={item} itemSize={itemSize} {...this.props}/>
  }
}

WorkoutGrid.propTypes = {
  selectedDateWorkouts: React.PropTypes.array
}
