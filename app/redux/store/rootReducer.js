import { combineReducers } from 'redux';
import navigationState from '../navigation/reducer'
import deviceInfo from '../device/reducer'
export default combineReducers({
	navigationState,
	deviceInfo
});
