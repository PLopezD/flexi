import DeviceInfo from 'react-native-device-info';
const deviceId = DeviceInfo.getUniqueID()
import { createAction } from 'redux-actions';
import * as api from '../services/api';
import * as types from './types';

export const login = (token) => (
  dispatch => {
    dispatch(createAction(types.LOADING)())
    const localLogin = createAction(types.LOGIN);
    const endLoad = createAction(types.DONE_LOADING);
    const loggedIn = createAction(types.LOGGED_IN);
    // call fb
    getFbUserInfo(token).then((user)=>{
      dispatch(localLogin(user)),
      api.post('api/users', user).then((result) => {
        dispatch(endLoad())
        dispatch(loggedIn())
      })
      .catch((err) => {
        console.warn(err)
        dispatch(endLoad())
        console.warn('ERROR GETTING DATA FROM CORE')
      })
    }
    )
  }
  )

let getFbUserInfo = (token) => {
  let user = {};
  return fetch("https://graph.facebook.com/me?fields=email,name,picture&access_token=" + token)
  .then((response) => response.json())
  .then((json) => {
    user.deviceId = deviceId
    user.token = token
    user.email = json.email
    user.name = json.name
    user.picture = json.picture.data.url
    user.fbId = json.id
    return user;
      // send user to backend 
      // redirect user to from page
    })
  .catch((err) => {
    console.warn(err)
    console.warn('ERROR GETTING DATA FROM FACEBOOK')
  })
}

