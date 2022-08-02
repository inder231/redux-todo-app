import { loadData, saveData } from "../../utils/localStorage";
import * as types from "./actionTypes";
const initState = {
  isAuth: loadData("auth") || false,
  isLoading: false,
  token: loadData("auth") || null,
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      let token = payload.token;
      saveData("auth", { isAuth: true, token: token });
      return {
        ...state,
        isLoading: false,
        token: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: null,
      };
    default:
      return state;
  }
};
