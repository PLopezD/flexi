import React, { Component } from 'react';
import { Login } from './containers';
import { Provider } from 'react-redux';
import { store } from './store';

export class Root extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    console.log("msg")
  }

  renderRoot(ComponentToRender) {
    return (
      <Provider store={store}>
        <ComponentToRender/>
      </Provider>
    );
  }

  render() {
    return this.renderRoot(Login)
  }
}
