import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { todoReducer } from "./AppReducer/reducer";
import { authReducer } from "./AuthReducer/reducer";
const rootReducer = combineReducers({ todoReducer, authReducer });
const logger1 = (store) => (next) => (action) => {
  return next(action);
};
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger1))
);

//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
