import { AppRegistry } from 'react-native';
import AppRoute from './app/app';


import React, { Component } from 'react';  
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import configureStore from './app/redux/store';

const store = configureStore({}); 
const App = () => (
  <Provider store={store}>
    <AppRoute />
  </Provider>
) 

AppRegistry.registerComponent('tippyPro', () => App);
