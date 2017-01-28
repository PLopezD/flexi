import { connect } from 'react-redux'
import React, { Component } from 'react'
import {
 Text,
 View,
 StyleSheet
} from 'react-native'
import * as globalStyles from '../styles'

import { upload } from '../actions/uploadActions'
import { setModalVisibility, setImageSource } from '../actions/actions'
import { UploadHolder } from '../ui'

export class Container extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.main}>
            <UploadHolder {...this.props}
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  upload(url, options) {
    return dispatch(upload(url, options))
  },
  setModalVisibility(bool) {
    return dispatch(setModalVisibility(bool))
  },
  setImageSource(imageSrc) {
    return dispatch(setImageSource(imageSrc))
  }
})

const mapStateToProps = (state) => ({
  modalVisibility: state.upload.modalVisibility,
  activeTab: state.ui.activeTab,
  imageSrc: state.ui.imageSrc
})

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
