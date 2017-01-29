import React from 'react'
import { TouchableOpacity } from 'react-native'
import Image from 'react-native-image-progress'

export const PhotoItem = (props) => (
  <TouchableOpacity
        key = { props.item._id }
        style = {{ width: props.itemSize, height: props.itemSize }}
        onPress = { () => {
          props.setModalVisibility(true)
          props.setImageSource({ imageSource: { uri: props.item.picUrl } })
        }}>
        <Image
          resizeMode = "cover"
          style = {{ flex: 1 }}
          source = {{ uri: props.item.picUrl }}
        />
  </TouchableOpacity>
)

PhotoItem.propTypes = {
  item: React.PropTypes.object,
  itemSize: React.PropTypes.number,
  setModalVisibility: React.PropTypes.func,
  setImageSource: React.PropTypes.func
}
