import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import initialState from "./initialState";
export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
