import { combineReducers } from 'redux'

import { calendar } from './calendar'
import { main } from './main'
import { ui } from './ui'
import { upload } from './upload'
import { user } from './user'

export default combineReducers({
  calendar,
  main,
  ui,
  upload,
  user
})
