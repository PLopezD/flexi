import { combineReducers } from 'redux'
import { ui } from './ui'
import { user } from './user'
import { upload } from './upload'
import { main } from './main'

export default combineReducers({
  user,
  upload,
  ui,
  main
})
