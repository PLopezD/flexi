import DeviceInfo from 'react-native-device-info'
import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'

import * as api from '../services/api'
import * as types from './types'

const deviceId = DeviceInfo.getUniqueID()

export const login = (token) => (
  dispatch => {
    dispatch(createAction(types.LOADING)(true))
    const localLogin = createAction(types.LOGIN)
    const endLoad = createAction(types.LOADING)
    const loggedIn = createAction(types.LOGGED_IN)
    // call fb
    getFbUserInfo(token).then((user) => {
      dispatch(localLogin(user))
      AsyncStorage.setItem('user', JSON.stringify(user))
      api.post('api/users', user).then((result) => {
        dispatch(endLoad(false))
        dispatch(loggedIn())
      })
      .catch((err) => {
        console.warn(err)
        dispatch(endLoad(false))
        console.warn('ERROR GETTING DATA FROM CORE')
      })
    }
    )
  }
)

let getFbUserInfo = (token) => {
  let user = {}
  return fetch('https://graph.facebook.com/me?fields=email,name,picture&access_token=' + token)
  .then((response) => response.json())
  .then((json) => {
    user.deviceId = deviceId
    user.token = token
    user.email = json.email
    user.name = json.name
    user.picture = json.picture.data.url
    user.fbId = json.id
    return user
  })
  .catch((err) => {
    console.warn('ERROR GETTING DATA FROM FACEBOOK')
    console.warn(err)
  })
}

export const localRegisterLogin = (user) => (
  createAction(types.LOGIN)(user)
)
