import { StyleSheet,Platform } from 'react-native';
const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 20 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
        backgroundColor: "white",
    }
});
export default styles;  
