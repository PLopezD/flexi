import React, { Component } from 'react'
import { View } from 'react-native'
import TabView from 'react-native-scrollable-tab-view'

import { ScoreboardTab } from './ScoreboardTab'
import { UploadTab } from './UploadTab'
import { CalendarTab } from './CalendarTab'
import { TabBar } from './TabBar'

import { Header } from '../ui'

export class Main extends Component {
  constructor () {
    super()
    this.state = {
      activeTab: 2
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

          <ScoreboardTab
            tabLabel="ios-paper"
            activeTab={this.state.activeTab}
          />
          <UploadTab
            tabLabel="ios-camera"
            activeTab={this.state.activeTab}
          />
          <CalendarTab
            tabLabel="ios-calendar"
            activeTab={this.state.activeTab}
          />
        </TabView>
      </View>
    )
  }
}
