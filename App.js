/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home'
import ServiceDetail from './Screens/ServiceDetail';





export default class App extends Component {
  render() {
    return (
      <View>
   <ServiceDetail></ServiceDetail>
      </View>
    );
  }
}

