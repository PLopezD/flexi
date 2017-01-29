import { connect } from 'react-redux'
import React, { Component } from 'react'
import { View } from 'react-native'
import TabView from 'react-native-scrollable-tab-view'

import { ScoreboardTab } from './ScoreboardTab'
import { UploadTab } from './UploadTab'
import { CalendarTab } from './CalendarTab'
import { TabBar } from './TabBar'

import { Header } from '../ui'

import { changeTab } from '../actions/actions'
import { getWorkouts } from '../actions/standardAsyncActions'

export class Container extends Component {
  constructor () {
    super()
  }

  handleTabChange ({i}) {
    this.props.changeTab(i)
  }
  componentWillMount () {
    this.props.getWorkouts()
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Header {...this.props}>flexi</Header>
        <TabView
          page={this.props.activeTab}
          tabBarTextStyle={{ fontSize: 15 }}
          tabBarPosition="bottom"
          onChangeTab={this.handleTabChange.bind(this)}
          renderTabBar={() => <TabBar />}
        >

          <ScoreboardTab
            tabLabel="ios-paper"
            activeTab={this.props.activeTab}
          />
          <UploadTab
            tabLabel="ios-camera"
            activeTab={this.props.activeTab}
            {...this.props}
          />
          <CalendarTab
            tabLabel="ios-calendar"
            activeTab={this.props.activeTab}
          />
        </TabView>
      </View>
    )
  }
}
const mapActionsToProps = (dispatch) => ({
  changeTab (tabIndex) {
    return dispatch(changeTab(tabIndex))
  },
  getWorkouts () {
    return dispatch(getWorkouts())
  }
})

const mapStateToProps = (state) => ({
  activeTab: state.ui.activeTab
})

export const Main = connect(mapStateToProps, mapActionsToProps)(Container)

Container.propTypes = {
  changeTab: React.PropTypes.func,
  getWorkouts: React.PropTypes.func,
  activeTab: React.PropTypes.number
}

