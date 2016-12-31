import { connect } from 'react-redux';
import React, { Component } from 'react';
import { login } from '../actions/actions'
import { 
 Text,
 View,
 StyleSheet
} from 'react-native';

import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

export class Container extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
      <LoginButton
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("Login failed with error: " + result.error);
            } else if (result.isCancelled) {
              alert("Login was cancelled");
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                const { accessToken } = data
                this.initUser(accessToken)
              })
            }
          }
        }
      />
      </View>
      );
  }

  initUser(token) {
    fetch("https://graph.facebook.com/me?fields=email,name,picture&access_token=" + token)
    .then((response) => response.json())
    .then((json) => {
      user = {};
      user.token = token
      user.email = json.email
      user.name = json.name
      user.picture = json.picture.data.url
      user.fbId = json.id
      this.props.login(user);
      // send user to backend 
      // redirect user to from page
  })
    .catch((err) => {
      console.warn(err)
      console.warn('ERROR GETTING DATA FROM FACEBOOK')
    })
  }
}

const mapActionsToProps = (dispatch) => ({
  login(user) {
    return dispatch(login(user));
  }
});

const mapStateToProps = (state) => ({
  user: state.user
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    alignItems: 'center'
  },
  action: {
    backgroundColor:'red',
    fontSize: 26,
    height:50,
    width:100
  }
});

export const Login = connect(mapStateToProps, mapActionsToProps)(Container);