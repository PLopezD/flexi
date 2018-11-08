import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { Button, ActionButton  } from 'react-native-material-ui';
import FloatingButton from '../../components/FloatingButton';

import { ImagePicker, Camera, Permissions} from 'expo';

export default class PhotoUpload extends React.Component {
  state = {
    image: true,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{marginBottom:15}}>
          <Button
            raised
            text="Pick an image from camera roll"
            icon="add-to-photos"
            onPress={this._pickImageFromCameraRoll}
          />
        </View>
        <View style={styles.spacingView}>
          <Button
            raised
            text="Take a picture with camera"
            icon="camera"
            onPress={this._startCamera}
          />
        </View>
        {image &&
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Image source={{ uri: image }} style={{ width: width, height: height }} /> */}
            <View style={styles.buttonHolder}>
              <FloatingButton onPress={this._dumbPress}/>
            </View>  
          </View>
        }
      </View>
    );
  }

  _pickImageFromCameraRoll = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({});

    console.log(result);
    
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  _startCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({});

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }
  _dumbPress = () => {
    console.log('12345');
    
  }
}

const styles = StyleSheet.create({
  buttonHolder: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
    marginBottom: 'auto',
    position: 'absolute',
    bottom: 10,
  },
  buttonRight: {
    position: 'absolute',
    right: 0
  },
  buttonLeft: {
    position: 'absolute',
    left: 0
  }
})