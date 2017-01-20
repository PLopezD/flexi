import { connect } from 'react-redux'
import React, { Component } from 'react'
import { login } from '../actions/loginActions'
import { loading } from '../actions/actions'
import {
 View,
 StyleSheet,
 ActivityIndicator
} from 'react-native'

import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'

import { Header } from '../ui'

export class Container extends Component {
  constructor () {
    super()
  }

  render () {
    let Display = <LoginButton onLoginFinished={this.fireFacebookLogin()}/>
    if (this.props.loading) {
      Display = <ActivityIndicator
            animating={this.props.loading}
            style={{height: 80}}
            size="large"
          />
    }
    return (
      <View>
        <Header>flexi</Header>
          <View style={styles.container}>
            {Display}
        </View>
      </View>
    )
  }

  fireFacebookLogin () {
    return (error, result) => {
      if (error) {
        alert('Login failed with error: ' + result.error)
      } else if (result.isCancelled) {
        alert('Login was cancelled')
      } else {
        AccessToken.getCurrentAccessToken().then((data) => {
          const { accessToken } = data
          this.initUser(accessToken)
        })
      }
    }
  }

  initUser (token) {
    this.props.startLoading(true)
    this.props.login(token)
  }
}

Container.propTypes = {
  loading: React.PropTypes.bool,
  login: React.PropTypes.func,
  startLoading: React.PropTypes.func
}

const mapActionsToProps = (dispatch) => ({
  login (token) {
    return dispatch(login(token))
  },
  startLoading (bool) {
    return dispatch(loading(bool))
  }
})

const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.ui.loading
})

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: 'center'
  }
})

export const Login = connect(mapStateToProps, mapActionsToProps)(Container)
