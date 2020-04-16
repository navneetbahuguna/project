import * as types from "../action.type";

export const getData = () => {
  return {
    type: types.GET_DATA,
  };
};
export const getDataSucess = (values) => {
  return {
    type: types.GET_DATA_SUCCESS,
    values,
  };
};
