import * as types from "../action.type";

export const getData = (data) => {
  console.log("data", data);
  return {
    type: types.GET_DATA,
    data,
  };
};
export const getDataSucess = (values) => {
  return {
    type: types.GET_DATA_SUCCESS,
    values,
  };
};
