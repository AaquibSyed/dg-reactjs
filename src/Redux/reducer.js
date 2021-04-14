import { INSERT_DATA, UPDATE_DATA, FILTER_DATA, ADD_PAGE } from "./types";
const initialState = {
  data: [],
  filteredData: [],
  page: "PAGE1",
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGE:
      let newpage = state.page === "PAGE1" ? "PAGE2" : "PAGE3";
      return {
        ...state,
        page: newpage,
      };
    case INSERT_DATA:
      return {
        ...state,
        data: state.data.concat(action.data),
        filteredData: state.data.concat(action.data),
      };

    case UPDATE_DATA:
      return {
        ...state,
        page: "PAGE2",
      };

    case FILTER_DATA:
      return {
        ...state,
        filteredData: action.payload.data,
      };
    default:
      return state;
  }
};

export default contentReducer;
