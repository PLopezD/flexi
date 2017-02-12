import { Provider, connect } from 'react-redux'
import { AsyncStorage, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

import { store } from './store'

import { Login, Main } from './containers'
import { localRegisterLogin } from './actions/loginActions'
import { loading } from './actions/actions'
import { getConfig } from './actions/getConfig'

class Container extends Component {
  constructor () {
    super()
  }

  componentWillMount () {
    this.props.loadAction(true)
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
      this.props.loadAction(false)
    })
    .catch((err) => {
      this.props.loadAction(false)
      console.log(err)
    })
  }
  componentDidMount () {
    this.props.getConfig()
  }

  renderRoot (ComponentToRender) {
    return <ComponentToRender user={this.props.user}/>
  }

  render () {
    if (this.props.mainLoading) {
      return (
          <ActivityIndicator
            animating={true}
            style={{height: 80, paddingTop: 100}}
            size="large"
          />
      )
    }
    const { user } = this.props
    return user.token ? this.renderRoot(Main) : this.renderRoot(Login)
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    user: state.user,
    mainLoading: state.ui.loading
  }
}

const mapActionsToProps = (dispatch) => ({
  localRegisterLogin (user) {
    return dispatch(localRegisterLogin(user))
  },
  loadAction (bool) {
    return dispatch(loading(bool))
  },
  getConfig () {
    return dispatch(getConfig())
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

Container.propTypes = {
  getConfig: React.PropTypes.func,
  loadAction: React.PropTypes.func,
  mainLoading: React.PropTypes.bool
}
