import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'

import * as api from '../services/api'
import * as types from './types'

export const getConfig = () => (
  dispatch => {
    const storeConfig = createAction(types.STORE_CONFIG)
    configGetRequest().then(config =>
      dispatch(storeConfig(config))
    )
  }
)

const configGetRequest = () => (
  api.get('api/config')
)
