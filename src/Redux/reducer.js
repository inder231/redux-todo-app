import { ActionTypes } from "./actionTypes";

const initState = {
  todos: [],
  isError: false,
  isLoading: false,
};
export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ActionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    case ActionTypes.GET_TODOS_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case ActionTypes.DELETE_TODOS_REQUEST:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case ActionTypes.DELETE_TODOS_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
      };
    case ActionTypes.DELETE_TODOS_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
