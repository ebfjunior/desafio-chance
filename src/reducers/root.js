import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import reportReducer from "./report_reducer";
import commentReducer from "./comment_reducer";
import appReducer from "./app_reducer";

const rootReducer = combineReducers({
  reports: reportReducer,
  comments: commentReducer,
  form: reduxFormReducer,
  app: appReducer
});

export default rootReducer;
