import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'

import * as api from '../services/api'
import * as types from './types'

import { RNS3 } from 'react-native-aws3'

export const upload = (src, options) => {
  return (dispatch, getState) => {
    dispatch(createAction(types.LOADING)(true))
    
    let endLoad = createAction(types.LOADING)(false)
    let changeTab = createAction(types.CHANGE_TAB)(0)
    let closeModal = createAction(types.SET_MODAL_VISIBILITY)(false)
    let config = getState().main.config
    let user = getState().user
    let timestamp = new Date().toISOString();
    let fileName = `${user.name.split(' ')[0]}${timestamp}.jpg`

    uploadToS3(src.uri, fileName, config).then((res) => {
      let workout = {
        picUrl: res.headers.Location,
        user
      }
      api.post('api/workouts', workout).then(
        dispatch(endLoad),
        dispatch(closeModal),
        dispatch(changeTab)
      )
    })
  }
}



let uploadToS3 = (uri, name, config) => {
  let file = {
    uri,
    name,
    type: "image/png"
  }
  return RNS3.put(file, config)
}