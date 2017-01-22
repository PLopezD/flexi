import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import { RNS3 } from 'react-native-aws3';

import * as api from '../services/api'
import * as types from './types'

export const upload = (url, options) => (
  dispatch => {
    
    uploadToS3(url)
  }
)



let uploadToS3 = (url) => {
  let file = {
    uri: url,
    name: "retry.jpg",
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