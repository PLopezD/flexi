import { createAsyncCreator } from '../services/asyncCreators';
import * as api from '../services/api';
import * as types from './types';

export const fetchCurrentWorkout = () => (
  createAsyncCreator(
    types.LOADING,
    () => api.post('new_user'),
    types.DONE_LOADING
  )
);
