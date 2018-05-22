import { StyleSheet, Platform } from 'react-native';
import {
    HEADER_COLOR,
    TEXT_COLOR_LIGHT,
    BORDER_COLOR_LIGHT,
    BLACK
} from '../constants/variables';
const styles = StyleSheet.create({
    header: {
        backgroundColor: HEADER_COLOR
    },
    hamburgerIcon: {
        paddingHorizontal: 10,
        width: 70,
        flex: 1,
        justifyContent: 'center'
    },
    vectorIcon:{
        padding:30,
        paddingLeft:10
    },
    icon: {
        width: 21,
        height: 21
    },
    headerMainTitleStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        color: TEXT_COLOR_LIGHT,
        fontWeight: 'normal'
    },
    headerLeftStyle: {
        paddingLeft: 15,
        width: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'row'
    },
    headerRightStyle: {
        paddingRight: 15,
        width: 100,
        display: 'flex',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    headerTitleStyle: {
        color: TEXT_COLOR_LIGHT,
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 16,

    },
    headerStyle: {
        backgroundColor: HEADER_COLOR,
        borderBottomColor: BORDER_COLOR_LIGHT,
        borderStyle: 'solid',
        borderWidth: 0,
        justifyContent: 'center',
        paddingTop: 0
    },
    headerLogo:{
        flex: 1, 
        alignItems: 'center', 
        height: 40
    },
    drawerlabelStyle: {
        fontSize: 14,
        marginLeft: 0,
        fontWeight: 'normal'
    },
    drawerIconContainerStyle: {
        marginRight: 10
    },
    drawerItemStyle: {
        marginLeft: 20,
        marginBottom: 10
    },
    textInput: {
        borderBottomWidth: 1,
        height: 30,
        fontWeight: '400',
        color: BLACK,
    }
});


export default styles;
