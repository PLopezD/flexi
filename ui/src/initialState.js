import DeviceInfo from 'react-native-device-info'

const deviceId = DeviceInfo.getUniqueID()

export const user = {
  fbId: null,
  deviceId: deviceId,
  token: null,
  email: null,
  name: null,
  picture: null
}
