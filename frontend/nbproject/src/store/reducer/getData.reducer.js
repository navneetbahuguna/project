import * as types from "../action.type";
export const getdataReducer = (state = {}, action) => {
  const response = action.values;
  switch (action.type) {
    case types.GET_DATA_SUCCESS:
      return response;
    case types.GET_DATA_ERROR:
      return state;
    default:
      return state;
  }
};
