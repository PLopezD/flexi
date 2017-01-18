import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
 Text,
 View,
 StyleSheet
} from 'react-native'

import * as globalStyles from '../styles'
import { UploadHolder } from '../ui/UploadHolder'

export class Container extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.main}>
            <UploadHolder />
          </View>
        </View>
      </View>
    )
  }
}

const mapActionsToProps = (dispatch) => ({})

const mapStateToProps = (state) => ({})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: globalStyles.ACCENT_COLOR,
    flex: 1,
    flexBasis: 1,
    flexGrow: 1
  }
})

export const UploadTab = connect(mapStateToProps, mapActionsToProps)(Container)
