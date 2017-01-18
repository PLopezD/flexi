import * as globalStyles from '../styles'
import PicModal from './PicModal'

import React ,{Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native'

import Dimensions from 'Dimensions';
var {height, width} = Dimensions.get('window');

import ImagePicker from 'react-native-image-picker';
import { RNS3 } from 'react-native-aws3';
import Button from 'apsl-react-native-button'

export class UploadHolder extends Component {
  constructor(){
    super();
    this.state = {
      avatarSource: null,
      imgBase64: '',
      response: '',
    }
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source, temp;
        temp = response.data;

        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        }
        this.setState({
          response:response,
          avatarSource: source,
          imgBase64: temp,
        });
      }
    });
  }

  upload() {
    let url = this.state.response.origURL
    let file = {
      uri: url,
      name: "woke.jpg",
      type: "image/png"
    }
    let options = {
      keyPrefix: "ok",
      bucket: "flextester123",
      region: "us-east-1",
      accessKey: "AKIAIGQR5FTTWN2IQRIA",
      secretKey: "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",
      successActionStatus: 201
    }

    RNS3.put(file, options).then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    let render = (<Button style={styles.buttonStyle} onPress={this.selectPhotoTapped.bind(this)}>
                    <Text style={styles.buttonText}>Pick a pic</Text>
                  </Button>)
    if (this.state.response) {
      render = <PicModal avatarSource={this.state.avatarSource}/>
    }   
    return (
      <View style={styles.container}>
        {render}
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:200,
  },
  buttonStyle: {
    backgroundColor: globalStyles.SECONDARY_COLOR,
    borderColor: globalStyles.SECONDARY_COLOR,
    height:100,
    width:100
  },
  buttonText: {
    color:'white',
    fontSize:14,
    fontWeight:'bold'
  }
});
