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
            <Text style={styles.capture}>
              Take a picture
            </Text>
          </TouchableOpacity>
      </View>
    )
  }
  takePicture() {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
      let processStatus = function (response) {// process status
  if (response.status === 200 || response.status === 0) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error('Error loading: ' + url))
  }
}
    let parseBlob = function (response) {
      return response.blob();
      };
    let uploadToBackend = (blob) => {
      var formData = new FormData();
        formData.append('type', 'file');
        formData.append('image', blob);
        
      fetch(`http://localhost:8080/api/workouts`, { headers:{
                  headers,
                  body: formData
                  },
                  method: 'POST'
              }
        )
        .then(() => console.log('back from post'))
    }
    fetch('https://jpeg.org/images/jpeg-home.jpg', headers)
      .then(processStatus)
      .then(parseBlob)
      .then(uploadToBackend)
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
    padding: 10,
    height:height,
    width:width,
  }
});
