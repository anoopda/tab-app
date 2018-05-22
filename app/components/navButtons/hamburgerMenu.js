import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import HamburgerMenuIcon from '../../assets/icons/hamburger-icon.png';
import commonStyle from '../../styles/commonStyles';


export default class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
    }

    onButtonPress = () => {
        this.props.navigation.navigate('DrawerOpen')
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.onButtonPress() }}
             style={commonStyle.headerLeftStyle} 
            >
                <Image
                    style={{width:23,height:23}}
                    source={HamburgerMenuIcon}
                />
            </TouchableOpacity>

        );
    }
}



