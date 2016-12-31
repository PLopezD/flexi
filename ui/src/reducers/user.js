import * as types from '../actions/types';
import { user as initialState } from '../initialState';


export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
    let user = payload;
      return {
        ...state,
        email: payload.email,
        fbId: payload.fbId,
        token: payload.token,
        name: payload.name,
        picture: payload.picture
      };
    default:
      return state
  }
};
