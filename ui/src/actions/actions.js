import { createAction } from 'redux-actions';
import * as types from './types';

// create action for adding an exercise


export const login = (loggedIn) => (
  createAction(types.LOGIN)(loggedIn)
);
