import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import BackIcon from '../../../assets/icons/back-icon.png';
import commonStyle from '../../../styles/commonStyles';


export default class BackButton extends Component {
    constructor(props) {
        super(props);
    }

    onBackPress = () => {
      
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.onBackPress() }}
             style={commonStyle.headerLeftStyle} 
            >
                <Image
                    style={{width:23,height:23}}
                    source={BackIcon}
                />
            </TouchableOpacity>

        );
    }
}



