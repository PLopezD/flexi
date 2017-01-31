import React from 'react'
import * as globalStyles from '../../styles'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const ScoreRow = (props) => (
  <View style={styles.rowHolder}>
    <Text style={styles.listItem}>{props.rowData}</Text>
  </View>
)

const styles = StyleSheet.create({
  listItem: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  rowHolder: {
    borderColor:'black',
    borderWidth: 1,
    borderTopWidth: 0
  }
})
