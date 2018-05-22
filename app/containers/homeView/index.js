import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import HeaderLogo from '../../components/navElements/headerLogo';

export default class HomeView extends Component {

  render() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>HomeView</Text>
        </View>
    );
  }
}