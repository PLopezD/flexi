import React from 'react'
import * as globalStyles from '../styles'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Button from 'apsl-react-native-button'
let { width, height } = Dimensions.get('window')

export const ActionButton = (props) => (
  <View>
    <Button onPress={props.onPress} style={styles.buttonStyle}>
     <Text style={styles.buttonText}>{props.text}</Text>
    </Button>
  </View>
)


const styles = StyleSheet.create({
  buttonStyle:{
    backgroundColor:'#9B59B6',
    borderColor:'#8B59B6',
    borderWidth:3
  },
  buttonText:{
    color:'white',
    fontSize:20
  }
})

ActionButton.propTypes = {}
