import DeviceInfo from 'react-native-device-info'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import React, { Component } from 'react'

import { Login } from './containers'
import { Main } from './containers'
import * as api from './services/api'
import { store } from './store'
import { localRegisterLogin } from './actions/loginActions'

const deviceId = DeviceInfo.getUniqueID()

class Container extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
    }
  }
  componentWillMount() {
    AsyncStorage.getItem('user', (err, result) => {
      if (result) {
        let user = JSON.parse(result)
        this.props.localRegisterLogin(user)
      } else {
        this.setState({user:false}) 
      }
    })
  }

  renderRoot(ComponentToRender) {
    return <ComponentToRender user={this.props.user}/>
  }

  render() {
    const { user } = this.props
    console.log(user)
    return user.email ? this.renderRoot(Main) : this.renderRoot(Login)
  }
}
const mapStateToProps = (state) => ({
  user: state.user
})
const mapActionsToProps = (dispatch) => ({
  localRegisterLogin(user) {
    return dispatch(localRegisterLogin(user))
  }
})


const LocalRoot = connect(mapStateToProps, mapActionsToProps)(Container)


export class Root extends Component {
  render(){
    return (
      <Provider store={store}>
        <LocalRoot/>
      </Provider>
    ) 
  }
}
