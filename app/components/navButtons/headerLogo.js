
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
} from 'react-native';
import AppLogo from '../../assets/images/app-logo.png';
import commonStyle from '../../styles/commonStyles';


export default class HeaderLogo extends Component {
    render() {
        return (
            <View style={commonStyle.headerLogo}>
                <Image source={AppLogo} style={{
                    flex: 1,
                    resizeMode: 'contain',
                }} />
            </View>
        )
    }
}
