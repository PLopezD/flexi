import { Provider, connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import React, { Component } from 'react'

import { Login, Main } from './containers'
import { store } from './store'
import { localRegisterLogin } from './actions/loginActions'

class Container extends Component {
  constructor () {
    super()
    this.state = {
      user: {}
    }
  }

  componentWillMount () {
    // AsyncStorage.removeItem('user')
    AsyncStorage.getItem('user', (err, result) => {
      if (err) {
        console.log(err)
        return err
      }
      if (result) {
        let user = JSON.parse(result)
        this.props.localRegisterLogin(user)
      } else {
        this.setState({ user: false })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  renderRoot (ComponentToRender) {
    return <ComponentToRender user={this.props.user}/>
  }

  render () {
    const { user } = this.props
    return user.email ? this.renderRoot(Main) : this.renderRoot(Login)
  }
}
const mapStateToProps = (state) => ({
  user: state.user
})
const mapActionsToProps = (dispatch) => ({
  localRegisterLogin (user) {
    return dispatch(localRegisterLogin(user))
  }
})

Container.propTypes = {
  localRegisterLogin: React.PropTypes.func,
  user: React.PropTypes.object
}

const LocalRoot = connect(mapStateToProps, mapActionsToProps)(Container)

export class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <LocalRoot/>
      </Provider>
    )
  }
}
