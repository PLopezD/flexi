import { connect } from 'react-redux';
import React, { Component } from 'react';
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
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={{fontSize:20}}>Calendar view</Text>
          </View>
        </View>
      </View>
      );
  }
}

const mapActionsToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    flex: 1,
    marginTop:100,
    flexBasis:1,
    flexGrow:1
  }
});

export const Calendar = connect(mapStateToProps, mapActionsToProps)(Container);