import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import HeaderLogo from '../../components/navElements/headerLogo';

export default class IntroView extends Component {

  // static navigationOptions = ({ navigation, screenProps }) => ({
  //   headerTitle: <HeaderLogo />,
  //   headerLeft:  <HamburgerMenu />,
  //   headerRight:<View></View>
  // });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Intro View</Text>
      </View>
    );
  }
}