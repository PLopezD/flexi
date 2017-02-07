import React from 'react'
import * as globalStyles from '../../styles'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Image from 'react-native-image-progress'
let {height, width} = Dimensions.get('window')

export const ScoreRow = (props) => (
  <View style={styles.rowHolder}>
    <Image

      style = {styles.avatar}
      source = {{ uri: props.rowData.user.picture }}
    />
    <Text style={styles.listItem}>{props.rowData.score}</Text>
  </View>
)

const styles = StyleSheet.create({
  rowHolder: {
    flexDirection: 'row',
    width,
    borderColor:'black',
    borderWidth: 1,
    borderTopWidth: 0,
    justifyContent: 'space-around',
    height:40
  },
  listItem: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 10
  }
})
