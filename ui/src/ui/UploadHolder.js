import React, { Component } from 'react'
import { View, Text, StyleSheet, NativeModules, TouchableOpacity } from 'react-native'

import Camera from 'react-native-camera';
import moment from 'moment';


import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');
// Workout for {moment().format('MM/DD/YYYY')}

export class UploadHolder extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.capture} onPress={this.takePicture.bind(this)}>
            <Text>
              Take a picture
            </Text>
          </TouchableOpacity>
      </View>
    )
  }
  postPicture(picture) {
    let uploadToBackend = (res) => {
      fetch(`http://localhost:8080/api/workouts`, { headers: {
                  headers,
                  body: 'blob'
                  },
                  method: 'POST'
              }
        )
        .then(() => console.log('back from post'))
    }
    uploadToBackend()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexBasis:1,
    height:height,
    width:width,

  },
  capture: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 5,
    height:height,
    width:width,
  }
});
