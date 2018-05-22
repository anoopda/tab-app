import { StyleSheet, Platform } from 'react-native';
import {
    HIGHLIGHT_COLOR,
    TEXT_COLOR_LIGHT,
    HEADER_COLOR,
    BORDER_COLOR_LIGHT
}
    from '../../constants/variables'
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: HEADER_COLOR,
        justifyContent: 'center'
    },
    commonWrapper: {
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    textWrapper: {
        alignItems: 'center'
    },
    iconWrapper: {
        alignItems: 'flex-start'
    },
    addButtonWrapper: {
        alignItems: 'flex-end',
        marginRight: 5
    },
    buttonStyle: {
        padding: 10,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: TEXT_COLOR_LIGHT,
        fontSize: 16
    },
    titleText: {
        color: TEXT_COLOR_LIGHT,
        fontSize: 16
    },
    backIcon: {
        height: 20,
        width: 20,
    },
    ticketIcon: {
        height: 20,
        width: 20,
    }


});
export default styles;  
