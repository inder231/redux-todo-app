import { ActionTypes } from "./actionTypes";
//-------GET TODOS--------------
export const getTodoRequest = () => {
  return {
    type: ActionTypes.GET_TODOS_REQUEST,
  };
};
export const getTodoSuccess = (payload) => {
  return {
    type: ActionTypes.GET_TODOS_SUCCESS,
    payload,
  };
};
export const getTodoFailure = () => {
  return {
    type: ActionTypes.GET_TODOS_FAILURE,
  };
};
//===============*********==================
// ============ SET TODO
//===========================================
export const setTodoRequest = () => {
  return {
    type: ActionTypes.SET_TODOS_REQUEST,
  };
};
export const setTodoSuccess = () => {
  return {
    type: ActionTypes.SET_TODOS_SUCCESS,
  };
};
export const setTodoFailure = () => {
  return {
    type: ActionTypes.SET_TODOS_FAILURE,
  };
};
// =================**************===========
// --------DELETE TODO------------
// ===========================================
export const deleteTodoRequest = () => {
  return {
    type: ActionTypes.DELETE_TODOS_REQUEST,
  };
};
export const deleteTodoSuccess = () => {
  return {
    type: ActionTypes.DELETE_TODOS_SUCCESS,
  };
};
export const deleteTodoFailure = () => {
  return {
    type: ActionTypes.DELETE_TODOS_FAILURE,
  };
};
// ==================================
// -----------EDIT-TODO----------
// ======================================
export const editTodoRequest = () => {
  return {
    type: ActionTypes.EDIT_TODOS_REQUEST,
  };
};
export const editTodoSuccess = () => {
  return {
    type: ActionTypes.EDIT_TODOS_SUCCESS,
  };
};
export const editTodoFailure = () => {
  return {
    type: ActionTypes.EDIT_TODOS_FAILURE,
  };
};
