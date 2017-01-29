import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Modal } from 'react-native'
import Image from 'react-native-image-progress'
import { ActionButton } from './ActionButton'
import Icon from 'react-native-vector-icons/MaterialIcons'
const closeIcon = (<Icon name="close" size={30} color="white" />)
const uploadIcon = (<Icon name="send" size={30} color="white" />)

var {height, width} = Dimensions.get('window')

export default class PicModal extends Component {
  constructor () {
    super()
  }

  render () {
    let uploadButton
    if (this.props.activeTab === 1) {
      uploadButton = (<ActionButton onPress={this.uploadSequence.bind(this)}>{uploadIcon}</ActionButton>)
    }
    return (
      <Modal
        style={{ flex: 1 }}
        animationType={'fade'}
        visible={this.props.modalVisibility}
        onRequestClose={this.closeModal.bind(this)}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={this.props.imageSrc.imageSource} />
          <View style={styles.buttonHolder}>
            <ActionButton onPress={this.closeModal.bind(this)}>{closeIcon}</ActionButton>
            {uploadButton}
          </View>
        </View>
      </Modal>
    )
  }
  uploadSequence () {
    this.props.upload(this.props.imageSrc.imageSource)
  }
  closeModal () {
    this.props.setModalVisibility(false)
    setTimeout(() => {
      this.resetImage()
    }, 0)
  }
  resetImage () {
    this.props.setImageSource({activeImage: false})
    if (this.props.activeTab === 1) {
      this.props.changeTab(0)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width,
    height,
    flexDirection: 'column',
    position: 'relative'
  },
  buttonHolder: {
    position: 'absolute',
    flexDirection: 'row',
    width,
    bottom: 0,
    justifyContent: 'space-around'
  }
})

PicModal.propTypes = {
  activeTab: React.PropTypes.number,
  changeTab: React.PropTypes.func,
  imageSrc: React.PropTypes.object,
  modalVisibility: React.PropTypes.bool,
  setImageSource: React.PropTypes.func,
  setModalVisibility: React.PropTypes.func,
  upload: React.PropTypes.func
}
