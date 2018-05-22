import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import AppText from '../appText';
import BackIcon from '../../assets/icons/back-icon.png';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    onBackPress = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.commonWrapper, styles.textWrapper]}>
                    <AppText style={styles.titleText}>{this.props.title}</AppText>
                </View>
                <View style={[styles.commonWrapper, styles.iconWrapper]}>
                    <TouchableOpacity>
                        <Image
                            style={styles.backIcon}
                            source={BackIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const btnProps = {
    buttonStyle: styles.buttonStyle,
    buttonTextStyle: styles.buttonTextStyle
},
    addbtnProps = {
        buttonStyle: styles.buttonStyle,
        buttonTextStyle: styles.buttonTextStyle
    }


