import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

//For font Embedding -------  different for both androiod and iOS --- >>>>>>>>>





export default class AppText extends Component {
    render() {
        return (
            <Text
                style={this.props.style || null}
            >{this.props.children || null}</Text>
        );
    }
}