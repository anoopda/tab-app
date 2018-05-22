import { getDeviceInfo } from '../../utils/deviceDimensions';
export const ON_SAVE_DEVICE_INFO = "ON_SAVE_DEVICE_INFO";


//get device related info

export function deviceInit() {
    const deviceInfo = getDeviceInfo();
    return {
        type: ON_SAVE_DEVICE_INFO,
        deviceInfo,
    };
}
