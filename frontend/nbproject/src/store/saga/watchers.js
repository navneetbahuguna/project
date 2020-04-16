import { takeLatest } from "redux-saga/effects";

import * as types from "../action.type";

import { getDataSaga } from "./getdata.saga";

export default function* watchSagas() {
  yield takeLatest(types.GET_DATA, getDataSaga);
}
