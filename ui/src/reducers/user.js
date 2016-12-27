import * as types from '../actions/types';


export const user = (state = {
  loggedIn : false
}, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        loggedIn: payload
      };
    default:
      return state;
  }
};
