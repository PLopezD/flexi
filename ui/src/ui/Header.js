import React from 'react'
import * as globalStyles from '../styles'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

export const Header = (props) => {
  return (
    <View style={[styles.mainBar, props.style]}>
      <View style={styles.headerItem}>
        <Text style={styles.headerText}>{props.children}</Text>
      </View>
    </View>
  )
}

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
  }
})

Header.propTypes = {
  styles: React.PropTypes.object,
  children: React.PropTypes.string,
  style: React.PropTypes.object
}
