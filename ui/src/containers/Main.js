import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TabView from 'react-native-scrollable-tab-view';
import { Scoreboard } from './Scoreboard';

import { Header } from '../ui'

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    }
  }

  handleTabChange = ({i}) => {
    this.setState({activeTab: i});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header>flexi</Header>
        <TabView
          tabBarTextStyle={{ fontSize: 30 }}
          tabBarPosition="bottom"
          onChangeTab={this.handleTabChange}
        >
          <Scoreboard
            tabLabel="+"
            activeTab={this.state.activeTab}
          />
          <Text tabLabel="yo">yo</Text>
        </TabView>
      </View>
    );
  }
}
