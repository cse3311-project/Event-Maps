/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LogInScreen from './components/LogInScreen';
import RegisterScreen from './components/RegisterScreen';
import MapScreen from './components/MapScreen';

const RootStack = createStackNavigator(
  {
    LogIn: LogInScreen,
    Register: RegisterScreen,
    Map: MapScreen,
  },
  {
    initialRouteName: 'LogIn',
    
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}






