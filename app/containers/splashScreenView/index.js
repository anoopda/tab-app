import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreenMainStack } from '../../redux/navigation/actions'
import { deviceInit } from '../../redux/device/actions';

import Applogo from '../../assets/images/app-logo.png';
import styles from './styles';

class SpashScreenView extends Component {

  componentWillMount() {
    setTimeout(() => {
      this.props.deviceInit();
      this.props.navigateToScreenMainStack('HomeDrawerScreen')
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={Applogo} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectDetail: state.projectDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToScreenMainStack: (route) => dispatch(navigateToScreenMainStack(route)),
    deviceInit:() => dispatch(deviceInit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpashScreenView)
