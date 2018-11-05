// import React from 'react';
import { Camera, Permissions, Icon } from 'expo';
// import { Ionicons } from '@expo/vector-icons';

// import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// import Colors from '../../constants/Colors';

// export default class CameraScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Camera',
//   };

//   state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.front,
//   };

//   async componentWillMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   }

//   render() {
//     const { hasCameraPermission } = this.state;
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera style={{ flex: 1 }} type={this.state.type}>
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.15,
//                   alignSelf: 'flex-end',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type: this.state.type === Camera.Constants.Type.back
//                       ? Camera.Constants.Type.front
//                       : Camera.Constants.Type.back,
//                   });
//                 }}>
//                 <Ionicons
//                   name={'ios-reverse-camera'}
//                   size={40}
//                   style={{ marginLeft: 10, marginBottom: 10 }}
//                   color={Colors.tabIconDefault}
//                 />
//               </TouchableOpacity>  
//               <TouchableOpacity
//                 style={{
//                   flex: 1,
//                   alignSelf: 'flex-end',
//                   alignItems: 'flex-end',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type: this.state.type === Camera.Constants.Type.back
//                       ? Camera.Constants.Type.front
//                       : Camera.Constants.Type.back,
//                   });
//                 }}>
//                 <Ionicons
//                   name={'ios-videocam'}
//                   size={40}
//                   style={{ marginRight: 15, marginBottom: 10 }}
//                   color={Colors.tabIconDefault}
//                 />
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         </View>
//       );
//     }
//   }
// }
import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    let { image } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });

    
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}