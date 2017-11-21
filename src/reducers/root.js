import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import reportReducer from "./report_reducer";

const rootReducer = combineReducers({
  reports: reportReducer,
  form: reduxFormReducer
});

export default rootReducer;
