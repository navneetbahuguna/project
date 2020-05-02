import { put, call } from "redux-saga/effects";
import { getDataService } from "../service/getService";

import { getDataSucess } from "../actions/get.action";
import * as types from "../action.type";
export function* getDataSaga(data) {
  console.log("data", data);
  try {
    const response = yield call(getDataService, data);

    yield put(getDataSucess(response.data));
  } catch (error) {
    yield put({ type: types.GET_DATA_ERROR, error });
  }
}
