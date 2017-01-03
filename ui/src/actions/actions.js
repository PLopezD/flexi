import { createAction } from 'redux-actions';
import * as types from './types';

export const loading = () => (
  createAction(types.LOADING)()
);

export const doneLoading = () => (
  createAction(types.DONE_LOADING)()
);
