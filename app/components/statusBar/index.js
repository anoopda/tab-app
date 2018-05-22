import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './styles'
export default class StatusBarBackground extends Component {
    render() {
        return (
            <View style={[styles.statusBarBackground, this.props.style || {}]}>
            </View>
        );
    }
}


