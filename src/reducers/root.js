import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import reportReducer from "./report_reducer";
import appReducer from "./app_reducer";

const rootReducer = combineReducers({
  reports: reportReducer,
  form: reduxFormReducer,
  app: appReducer
});

export default rootReducer;
