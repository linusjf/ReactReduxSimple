import text from "./text.mjs";
import counter from "./counter.mjs";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  text,
});

export default rootReducer;
