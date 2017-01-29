import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native'
import Image from 'react-native-image-progress';

export const PhotoItem = (props) => (
  <TouchableOpacity
        key = { props.item._id }
        style = {{ width: props.itemSize, height: props.itemSize }}
        onPress = { () => {
          props.setModalVisibility(true)
          props.setImageSource({imageSource: {uri:props.item.picUrl }})
        }}>
        <Image
          resizeMode = "cover"
          style = {{ flex: 1 }}
          source = {{ uri: props.item.picUrl }}
        />
  </TouchableOpacity>
)
