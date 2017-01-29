import React from 'react'
// import * as globalStyles from '../styles'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Button from 'apsl-react-native-button'
let { width } = Dimensions.get('window')

export const ActionButton = (props) => (
  <View>
    <Button onPress={props.onPress} style={styles.buttonStyle}>
     <Text style={styles.buttonText}>{props.children}</Text>
    </Button>
  </View>
)

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    width: width / 10,
    height: width / 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})

ActionButton.propTypes = {
  onPress: React.PropTypes.func,
  children: React.PropTypes.object
}
