import React, { Component } from 'react'
import { View, Text, StyleSheet, ListView } from 'react-native'
import Dimensions from 'Dimensions'

let { height } = Dimensions.get('window')

export class ScoreBoardHolder extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 322', 'row 22', 'row121 2', 'row1312222 2'])
    }
  }

  render () {
    return (
     <View style={styles.container}>
        <Text style={styles.listItem}>rowData</Text>
        <ListView
          style={{paddingTop: 100}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    )
  }
  renderRow (rowData) {
    return (<Text style={styles.listItem}>{rowData}</Text>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: 1,
    flexGrow: 1,
    height,
    backgroundColor: 'blue'
  },
  listItem: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

