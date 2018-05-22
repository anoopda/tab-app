import { StyleSheet } from 'react-native';
import {APP_THEME_COLOR} from '../../constants/variables';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:APP_THEME_COLOR
    },
    logoWrapper:{
        height:40
    },
    logo:{
        flex: 1,
        resizeMode: 'contain'
    }
});
