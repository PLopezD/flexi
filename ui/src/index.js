import React, { Component } from 'react';
import { Login } from './containers';
import { Provider } from 'react-redux';
import { store } from './store';

export class Root extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    };
  }

  renderRoot(ComponentToRender) {
    return (
      <Provider store={store}>
        <ComponentToRender/>
      </Provider>
    );
  }

  render() {
    const { loggedIn } = this.state;
    return this.renderRoot(Login);
  }
}
