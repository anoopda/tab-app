import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import BackButton from '../../components/navButtons/backButton'
import HeaderLogo from '../../components/navButtons/headerLogo';
import HamburgerMenu from '../../components/navButtons/hamburgerMenu';

export default class HomeView extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: <HeaderLogo />,
    headerLeft:  <HamburgerMenu  navigation={navigation}/>,
    headerRight:<View></View>
  });


  render() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>HomeView</Text>
        </View>
    );
  }
}