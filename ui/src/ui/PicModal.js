import React, { Component } from 'react'
import * as globalStyles from '../styles'
import { Text, View, StyleSheet, Dimensions, Image, Modal} from 'react-native'
import { ActionButton } from './ActionButton'

var {height, width} = Dimensions.get('window');

export default class PicModal extends Component {
  constructor(){
    super();
  }

  render() {
    console.log(this.props.imageSrc.imageSource)
    return (
      <Modal
        style={{ flex: 1 }}
        animationType={'fade'}
        visible={this.props.visibility}
        onRequestClose={this.closeModal.bind(this)}
      >
        
        <View style={styles.container}>
          <Image style={styles.image} source={this.props.imageSrc.imageSource} />
          <View style={styles.buttonHolder}>
            {this.props.resetImage && <ActionButton onPress={this.closeModal.bind(this)} text='Cancel'/>}
            {this.props.upload && <ActionButton onPress={this.uploadSequence.bind(this)} text='Upload'/>}
          </View>
        </View>
      </Modal>
    )   
  } 
  uploadSequence() {
    this.props.upload(this.props.imageSource)
    this.reset()
  }
  closeModal() {
    this.props.changeTab(0)
    this.props.setModalVisibility(false);
    this.reset()
  }
  reset() {
    setTimeout(() => {
      this.props.resetImage()
    }, 0)
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    height,
    flexDirection: 'column',
    position: 'relative'
  },
  buttonHolder: {
    position:'absolute',
    flexDirection: 'row',
    width,
    bottom:0,
    justifyContent:'space-around'
  },
  button: {
    color:'blue',
    backgroundColor:'green'
  }
})
