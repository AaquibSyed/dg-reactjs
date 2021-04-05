import { INSERT_DATA, UPDATE_DATA, FILTER_DATA } from "./types";

export const insertData = (e) => {
  return {
    type: INSERT_DATA,
    payload: {
      title: null,
    },
  };
};

export const updateData = (enteredChar) => {
  return {
    type: UPDATE_DATA,
    payload: {
      title: null,
    },
  };
};

export const filterData = () => {
  return {
    type: FILTER_DATA,
    payload: {
      title: null,
    },
  };
};
