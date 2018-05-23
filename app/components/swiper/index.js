import React, { Component } from 'react';
import { View, ScrollView, Dimensions, Text } from 'react-native';
import styles from './styles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Swiper extends Component {

    constructor(props) {
        super(props);
        this.numbers = [{
            text: 'Page 1'
        }, {
            text: 'Page 2'
        },
        {
            text: 'Page 3'
        }];
        this.state = {
            currentpageIndex: 0
        }
    }

    renderElemnents = () => {
        return this.numbers.map((item, index) => {
            return <View key={index} style={{ flex: 1, backgroundColor: 'blue', width: WIDTH }}>
                <Text style={{ color: 'white' }}>{item.text}</Text>
            </View>
        })
    }

    onScroll = (event) => {
        const contentOffsetX = Math.abs(event.nativeEvent.contentOffset.x),
            cellWidth = WIDTH,
            cellIndex = Math.floor(contentOffsetX / cellWidth);
        this.setState({ currentpageIndex: cellIndex });
    }

    generateBreadCrumbs = () => {
        const { currentpageIndex } = this.state;
        return this.numbers.map((item, index) => {
            return <View key={index} style={[{ borderRadius: 10, width: 20, height: 20, margin: 5 }, index === currentpageIndex ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]

            }>
            </View>
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.contentContainer}
                    onScroll={(e) => this.onScroll(e)}
                    pagingEnabled={true}
                    horizontal={true}

                >
                    {
                        this.renderElemnents()
                    }
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 40, zIndex: 2, left: 0, right: 0, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        {this.generateBreadCrumbs()}
                    </View>
                </View>
            </View>
        );
    }
}
