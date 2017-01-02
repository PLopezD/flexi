import { connect } from 'react-redux';
import React, { Component } from 'react';
import { login } from '../actions/loginActions'
import { 
 Text,
 View,
 StyleSheet,
 ActivityIndicator
} from 'react-native';

import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';

import { Header } from '../ui'

export class Container extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Header>flexi</Header>
          <View style={styles.container}>
            <LoginButton
              onLoginFinished={this.fireFacebookLogin()}
            />
         <ActivityIndicator
            animating={this.props.loading}
            style={{height: 80}}
            size="large"
          />
        </View>
      </View>
      );
  }
  fireFacebookLogin() {
    return (error, result) => {
      if (error) {
        alert("Login failed with error: " + result.error);
      } else if (result.isCancelled) {
        alert("Login was cancelled");
      } else {
        AccessToken.getCurrentAccessToken().then((data) => {
          const { accessToken } = data
          this.initUser(accessToken);
        })
      }
    }
  }

  initUser(token) {
      this.props.login(token);
      // redirect user to from page
    }
}

const mapActionsToProps = (dispatch) => ({
  login(token) {
    return dispatch(login(token));
  }
});

const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.ui.loading
});

const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    flex: 1,
    alignItems: 'center'
  }
});

export const Login = connect(mapStateToProps, mapActionsToProps)(Container);