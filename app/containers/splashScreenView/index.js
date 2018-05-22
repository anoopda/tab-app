import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppText from '../../components/appText'

export default class SpashScreeView extends Component {

  componentWillMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('HomeDrawerScreen');
    },1000)
  }



  render() {
    return (
        <View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                <AppText style={{color:'red'}}>Splash Screen</AppText>
        </View>
    );
  }
}