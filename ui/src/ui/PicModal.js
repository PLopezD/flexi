import React, { Component } from 'react'
import * as globalStyles from '../styles'
import { Text, View, StyleSheet, Dimensions, Image, Modal } from 'react-native'
import Button from 'apsl-react-native-button'
var {height, width} = Dimensions.get('window');

export default class PicModal extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Modal
        style={{ flex: 1 }}
        animationType={'fade'}
        visible={this.props.visibility}
        onRequestClose={this.closeModal.bind(this)}
      >
        
        <View style={styles.container}>
          {this.props.upload && <Button onPress={this.uploadSequence.bind(this)}/>}
          <Image style={styles.image} source={this.props.imageSource} />
          {this.props.resetImage && <Button onPress={this.closeModal.bind(this)}/>}
        </View>
      </Modal>
    )   
  } 
  uploadSequence() {
    this.props.upload(this.props.imageSource)
    // loading spinner
    // send to s3
    // send to backend
    // send to calendar
    // undo loading spinner
    // this.props.resetImage()
  }
  closeModal() {
    this.props.changeTab(0)
    this.props.setModalVisibility(false);
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
    width:500,
    height:500
  }
})
