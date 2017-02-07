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

export const ui = {
  activeTab: 2,
  loading: false,
  imageSrc: {activeImage: false}
}

export const calendar = {
  loading: false,
  modalVisibility: false
}

export const upload = {
  modalVisibility: false
}

export const main = {
  config: {startDate: ''},
  scoreboard: []
}
