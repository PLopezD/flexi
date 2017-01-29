import React from 'react'
import * as globalStyles from '../styles'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/MaterialIcons';
const refreshIcon = (<Icon name="refresh" size={30} color="white" />)

export const Header = (props) => (
  <View style={[styles.mainBar, props.style]}>
    <View style={styles.headerItem}>
      <Text style={styles.headerText}>{props.children}</Text>
    </View>
      <Button style={styles.refreshButton} onPress={props.getWorkouts}>{refreshIcon}</Button>
  </View>
)

let { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  mainBar: {
    height: 55,
    width: width,
    backgroundColor: globalStyles.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    flex: 1,
    paddingTop: 25,
    color: 'white',
    height: 10,
    fontSize: 30,
    fontFamily: globalStyles.PRIMARY_FONT
  },
  refreshButton: {
    position: 'absolute',
    borderColor: 'transparent',
    right: 5,
    top:15
  }
})

Header.propTypes = {
  styles: React.PropTypes.object,
  children: React.PropTypes.string,
  style: React.PropTypes.object
}
