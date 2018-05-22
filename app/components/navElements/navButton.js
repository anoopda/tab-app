import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import BackIcon from '../../assets/icons/back-icon.png';
import HamburgerMenuIcon from '../../assets/icons/hamburger-icon.png';
import commonStyle from '../../styles/commonStyles';

export default class NavButton extends Component {
    constructor(props) {
        super(props);
        this.buttonMap = {
            hamburgerMenu: {
                icon: HamburgerMenuIcon,
                style: commonStyle.headerLeftStyle,
                imageStyle: {
                    width: 23,
                    height: 23
                },
                action: ''
            },
            back: {
                icon: BackIcon,
                style: commonStyle.headerLeftStyle,
                imageStyle: {
                    width: 23,
                    height: 23
                },
                action: ''
            }
        }
    }

    onButtonPress = () => {

    }

    render() {
        const { type } = this.props,
            defaultype = type && this.buttonMap[type] ? false : true;
        return (
            defaultype ? <View></View> :
                <TouchableOpacity onPress={() => { this.onButtonPress() }}
                    style={this.buttonMap[type].style}
                >
                    <Image
                        style={this.buttonMap[type].imageStyle}
                        source={HamburgerMenuIcon}
                    />
                </TouchableOpacity>

        );
    }
}


// Navbar buttons



