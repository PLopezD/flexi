import { combineReducers } from 'redux';
import { ui } from './ui';
import { user } from './user';

export default combineReducers({
  user,
  ui
});
