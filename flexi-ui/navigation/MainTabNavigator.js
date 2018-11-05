import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ScoreboardScreen from '../screens/scoreboard/ScoreboardScreen';
import CameraScreen from '../screens/camera/CameraScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';

const ScoreboardStack = createStackNavigator({
  Scoreboard: ScoreboardScreen,
});

ScoreboardStack.navigationOptions = {
  tabBarLabel: 'Scoreboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list` : 'md-list'}
    />
  ),
};

const CameraStack = createStackNavigator({
  Camera: CameraScreen,
});

CameraStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-camera` : 'md-camera'}
    />
  ),
};

const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-calendar` : 'md-calendar'}
    />
  ),
};

export default createBottomTabNavigator({
  ScoreboardStack,
  CameraStack,
  CalendarStack,
});
