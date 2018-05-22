import React, { Component } from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import commonStyle from '../styles/commonStyles'
import {View} from 'react-native';

//---------- Screens ------------ >>>>>>>>>>>>>
import SpashScreenView from '../containers/splashScreenView';
import FaqView from '../containers/faqView';
import IntroView from '../containers/introView';
import LoginView from '../containers/loginView';
import RegisterView from '../containers/registerView';
import ForgotPasswordView from '../containers/forgotPasswordView';
import HomeView from '../containers/homeView';
import AddProfessionalView from '../containers/addProfessionalView';

//---------- Nav buttons ------------ >>>>>>>>>>>>>
import HeaderLogo from '../components/navElements/headerLogo';
import NavButton from '../components/navElements/navButton';

export const DrawerNavigationHome = DrawerNavigator({
  HomeScreen: {
    screen: HomeView,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: null
    },
  },
  FaqScreen: {
    screen: FaqView,
    navigationOptions: {
      drawerLabel: 'FAQ',
      drawerIcon: null
    },
  }
},
  {
    headerMode: 'float',
    contentOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'white',
      labelStyle: commonStyle.drawerlabelStyle,
      iconContainerStyle: commonStyle.drawerIconContainerStyle,
      itemStyle: commonStyle.drawerItemStyle,
    },

  }
);

export const AppStackRoot = StackNavigator({
  SplashScreen: {
    screen: SpashScreenView,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    },
  },
  IntroScreen: {
    screen: IntroView,
    navigationOptions: {
      gesturesEnabled: false,
      header:null
    },
  },
  HomeDrawerScreen: {
    screen: DrawerNavigationHome,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      headerMode: 'screen',
      headerStyle: commonStyle.headerStyle,
      headerTitleStyle: commonStyle.headerMainTitleStyle,
      headerTitle: <HeaderLogo />,
      headerLeft:  <NavButton type={'hamburgerMenu'}/>,
      headerRight:<NavButton/>
    })
  },
});



