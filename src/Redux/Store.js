import { createStore, applyMiddleware } from "redux";
import contentReducer from "./reducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  contentReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
console.log(store.getState(() => {}));
export default store;
