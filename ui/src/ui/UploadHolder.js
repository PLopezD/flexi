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
import Button from 'apsl-react-native-button'

export class UploadHolder extends Component {
  constructor(){
    super();
    this.state = {
      imageSource: null,
      imgBase64: '',
      response: '',
      activeImage: false
    }
  }
  
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: false
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        this.props.changeTab(0)
        this.setState({activeImage:false})
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        this.props.changeTab(0)
        this.setState({activeImage:false})
        console.log('ImagePicker Error: ', response.error);
      } else {
        var source, temp;
        temp = response.data;

        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        }
        this.setState({
          response:response,
          imageSource: source,
          imgBase64: temp,
          activeImage:true
        });
        this.props.setModalVisibility(true)
      }
    });
  }
  resetImage() {
    this.setState({activeImage: false})
  }
  render() {
    if (this.props.activeTab === 1 && this.state.activeImage === false) {
      this.selectPhotoTapped()
    }

    return (
      <View style={styles.container}>
        <PicModal 
          visibility={this.props.modalVisibility}
          imageSource={this.state.imageSource}
          upload={this.props.upload}
          resetImage={this.resetImage.bind(this)}
          {...this.props}
        />
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


        
        
        
// <TouchableOpacity style={{backgroundColor:'yellow', width:60, height:20,marginTop:20,justifyContent: 'center',
//         alignItems: 'center'}} onPress={this.upload.bind(this)}>
//         <Text>Upload</Text>
//         </TouchableOpacity>
