import axios from "axios";
import * as types from "./actionTypes";
import { auth } from "../../REDUX2/components/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// ========== actions to get todos ==========//
export const getTodos = (dispatch) => {
  dispatch(getTodoRequest());
  axios
    .get("https://api-0231.herokuapp.com/todos")
    .then((res) => {
      dispatch(getTodoSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(getTodoFailure());
    });
};
export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoRequest());
  axios
    .delete(`https://api-0231.herokuapp.com/todos/${id}`)
    .then((res) => {
      dispatch(deleteTodoSuccess());
    })
    .then(() => dispatch(getTodos))
    .catch((err) => {
      dispatch(deleteTodoFailure());
    });
};
export const toggleTodo = (id, status) => (dispatch) => {
  dispatch(toggleTodoRequest());
  axios
    .patch(`https://api-0231.herokuapp.com/todos/${id}`, { status: !status })
    .then((res) => dispatch(toggleTodoSuccess()))
    .then(() => dispatch(getTodos))
    .catch((err) => dispatch(toggleTodoFailure()));
};
export const addTodo = (payload) => (dispatch) => {
  dispatch(setTodoRequest());
  axios
    .post("https://api-0231.herokuapp.com/todos", payload)
    .then((res) => {
      console.log(res.data);
      dispatch(setTodoSuccess());
    })
    .then(() => dispatch(getTodos))
    .catch((err) => {
      dispatch(setTodoFailure());
    });
};

//================ get todo actions ==============
export const getTodoRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
  };
};
export const getTodoSuccess = (payload) => {
  return {
    type: types.GET_TODOS_SUCCEES,
    payload: payload,
  };
};
export const getTodoFailure = () => {
  return {
    type: types.GET_TODOS_FAILURE,
  };
};
//=============== add todo actions ============
export const setTodoRequest = () => {
  return {
    type: types.SET_TODOS_REQUEST,
  };
};
export const setTodoSuccess = () => {
  return {
    type: types.SET_TODOS_SUCCEES,
  };
};
export const setTodoFailure = () => {
  return {
    type: types.SET_TODOS_FAILURE,
  };
};
//============== delete todos =========
export const deleteTodoRequest = () => {
  return {
    type: types.DELETE_TODOS_REQUEST,
  };
};
export const deleteTodoSuccess = () => {
  return {
    type: types.DELETE_TODOS_SUCCEES,
  };
};
export const deleteTodoFailure = () => {
  return {
    type: types.DELETE_TODOS_FAILURE,
  };
};
//============== toggle todos =========
export const toggleTodoRequest = () => {
  return {
    type: types.TOGGLE_TODOS_REQUEST,
  };
};
export const toggleTodoSuccess = () => {
  return {
    type: types.TOGGLE_TODOS_SUCCEES,
  };
};
export const toggleTodoFailure = () => {
  return {
    type: types.TOGGLE_TODOS_FAILURE,
  };
};
// ================== LOGIN actions =========
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
export const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  };
};

// ===========
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const logIn = (email, password) => {
  // dispatch(loginRequest());
  return signInWithEmailAndPassword(auth, email, password);

  // dispatch(loginSuccess());
};
export const logOut = () => {
  return signOut(auth);
};
