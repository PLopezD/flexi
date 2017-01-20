import { combineReducers } from 'redux'
import { ui } from './ui'
import { user } from './user'
import { upload } from './upload'

export default combineReducers({
  user,
  upload,
  ui
})
