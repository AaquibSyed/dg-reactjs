import { INSERT_DATA, UPDATE_DATA, FILTER_DATA } from "./types";
const initialState = [];

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_DATA:
      return state;

    case UPDATE_DATA:
      return state;

    case FILTER_DATA:
      return state;
    default:
      break;
  }
};
