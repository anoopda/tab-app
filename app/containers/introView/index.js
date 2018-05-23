import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Swiper from '../../components/swiper'


export default class IntroView extends Component {

  // static navigationOptions = ({ navigation, screenProps }) => ({
  //   headerTitle: <HeaderLogo />,
  //   headerLeft:  <HamburgerMenu />,
  //   headerRight:<View></View>
  // });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center',backgroundColor:'red'}}>
        <Swiper/>
      </View>
    );
  }
}



