import React, { Component } from 'react'
import { View } from 'react-native'
import TabView from 'react-native-scrollable-tab-view'

import { Scoreboard } from './Scoreboard'
import { Upload } from './Upload'
import { Calendar } from './Calendar'
import { TabBar } from './TabBar'

import { Header } from '../ui'

export class Main extends Component {
  constructor () {
    super()
    this.state = {
      activeTab: 0
    }
  }

  handleTabChange = ({i}) => {
    this.setState({activeTab: i})
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Header>flexi</Header>
        <TabView
          tabBarTextStyle={{ fontSize: 15 }}
          tabBarPosition="bottom"
          onChangeTab={this.handleTabChange}
          renderTabBar={() => <TabBar />}
        >

          <Scoreboard
            tabLabel="ios-paper"
            activeTab={this.state.activeTab}
          />
          <Upload
            tabLabel="ios-camera"
            activeTab={this.state.activeTab}
          />
          <Calendar
            tabLabel="ios-calendar"
            activeTab={this.state.activeTab}
          />
        </TabView>
      </View>
    )
  }
}
