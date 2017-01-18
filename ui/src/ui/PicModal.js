import React, { Component } from 'react'
import * as globalStyles from '../styles'
import { Text, View, StyleSheet, Dimensions, Image, Modal } from 'react-native'
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
        visible={true}
        onRequestClose={this.props.closeModal}
      >
        
        <View style={styles.container}>
          <Image style={styles.image} source={this.props.avatarSource} />
        </View>
      </Modal>
    )   
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
