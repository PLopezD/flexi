import * as globalStyles from '../../styles'
import PicModal from '../PicModal'

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Platform
} from 'react-native'

import ImagePicker from 'react-native-image-picker'

export class UploadHolder extends Component {
  constructor () {
    super()
    this.state = {
      imageSource: null,
      imgBase64: '',
      response: '',
      activeImage: false
    }
  }

  selectPhotoTapped () {
    const options = {
      quality: 1.0,
      maxWidth: 1000,
      maxHeight: 1000,
      storageOptions: {
        skipBackup: false
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        this.resetImage()
        console.log('User cancelled photo picker')
      } else if (response.error) {
        this.resetImage()
        console.log('ImagePicker Error: ', response.error)
      } else {
        var source, temp
        temp = response.data

        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true}
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true}
        }
        this.props.setImageSource({
          response,
          imageSource: source,
          imgBase64: temp,
          activeImage: true
        })
        this.props.setModalVisibility(true)
      }
    })
  }
  resetImage () {
    this.props.changeTab(0)
    this.props.setImageSource({activeImage: false})
  }
  render () {
    if (this.props.activeTab === 1 && this.props.imageSrc.activeImage === false) {
      this.selectPhotoTapped()
    }

    return (
      <View style={styles.container}>
        <PicModal
          {...this.props}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200
  },
  buttonStyle: {
    backgroundColor: globalStyles.PRIMARY_COLOR,
    borderColor: globalStyles.SECONDARY_COLOR,
    height: 100,
    width: 100
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }
})

UploadHolder.propTypes = {
  setModalVisibility: React.PropTypes.func,
  setImageSource: React.PropTypes.func,
  changeTab: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  imageSrc: React.PropTypes.object
}
