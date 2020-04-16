import { combineReducers } from "redux";
import { getdataReducer } from "./getData.reducer";
const rootReducer = combineReducers({
  getdataReducer,
});

export default rootReducer;
