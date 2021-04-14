import { INSERT_DATA, UPDATE_DATA, FILTER_DATA, ADD_PAGE } from "./types";

export const insertData = (data) => {
  console.log(data);
  return {
    type: INSERT_DATA,
    data: data,
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

export const filterData = (data, value) => {
  console.log(value);
  return {
    type: FILTER_DATA,
    payload: {
      data: data.filter(
        (x) => x.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
      ),
    },
  };
};

export const addPage = () => {
  return {
    type: ADD_PAGE,
  };
};
