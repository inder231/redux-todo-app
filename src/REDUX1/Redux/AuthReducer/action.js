import * as types from "./actionTypes";
export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: payload,
  };
};
export const loginFailure = (payload) => {
  return {
    type: types.LOGIN_FAILURE,
  };
};
