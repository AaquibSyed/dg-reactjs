import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { contentReducer } from "./reducer";

export const store = createStore(contentReducer, applyMiddleware(logger));
console.log(store.getState(() => {}));
