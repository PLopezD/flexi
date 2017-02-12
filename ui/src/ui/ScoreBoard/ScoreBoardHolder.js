import React, { Component } from 'react'
import { View, Text, StyleSheet, ListView } from 'react-native'
import Dimensions from 'Dimensions'

import { ScoreRow } from './ScoreRow'

let { height } = Dimensions.get('window')

export class ScoreBoardHolder extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([])
    }

  }
  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state.dataSource = ds.cloneWithRows(nextProps.scoreboard || [])
  }
  
  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
    )
  }
  
  renderRow (rowData) {
    return (<ScoreRow {...this.props} rowData={rowData}/>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: 1,
    flexGrow: 1,
    height,
    backgroundColor: 'blue'
  }
})

