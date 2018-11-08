import React from 'react';
import { Icon } from 'expo';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

export default class FloatingButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[styles.buttonCircle, {backgroundColor: this.props.color}]}>
            <Icon.Ionicons
                name={this.props.icon}
                size={70}
                color="white"
                style={{ marginBottom: -3 }}
                />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    buttonCircle: {
        height: 70,
        width: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    }
  })