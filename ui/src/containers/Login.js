import { connect } from 'react-redux';
import React, { Component } from 'react';
import Button from 'apsl-react-native-button'
import { login } from '../actions/actions'
import { 
 Text,
 View,
 StyleSheet
} from 'react-native';

export class Container extends Component {
  constructor() {
    super();
  }

  render() {
    const anti = !this.props.loggedIn
    return (
      <View style={styles.container}>
      <Button 
        style={{backgroundColor: 'red'}} 
        textStyle={{fontSize: 18}}
        onPress={this.props.login.bind(this, anti)}>
          login
      </Button>
        <Text style={styles.action}>
          {this.props.loggedIn.toString()}
        </Text>
      </View>
    );
  }
}

const mapActionsToProps = (dispatch) => ({
  login(test) {
    return dispatch(login(test));
  }
});

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn
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