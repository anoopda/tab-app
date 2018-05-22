import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LoginView extends Component {
  render() {
    return (
        <View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                <Text>LoginView</Text>
        </View>
    );
  }
}