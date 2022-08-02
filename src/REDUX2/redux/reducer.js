import * as types from "./actionTypes";
const initState = {
  todos: [],
  isLoading: false,
  isError: false,
};
export const todoReducer = (oldState = initState, { type, payload }) => {
  switch (type) {
    case types.GET_TODOS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.GET_TODOS_SUCCEES:
      return {
        ...oldState,
        isLoading: false,
        todos: payload,
        isError: false,
      };
    case types.GET_TODOS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    case types.SET_TODOS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.SET_TODOS_SUCCEES:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
      };
    case types.SET_TODOS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    default:
      return oldState;
  }
};
const initAuth = {
  isAuth: false,
  isLoading: false,
  token: "",
};
export const authReducer = (state = initAuth, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
