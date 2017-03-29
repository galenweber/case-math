/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/pages/Home';
import Calculator from './src/pages/Calculator';

const CaseMath = StackNavigator({
  Home: { screen: Home },
  Calculator: { screen: Calculator }
});

AppRegistry.registerComponent('CaseMath', () => CaseMath);
