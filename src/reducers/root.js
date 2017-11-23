import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import reportReducer from "./report_reducer";
import commentReducer from "./comment_reducer";
import userReducer from "./user_reducer";
import appReducer from "./app_reducer";

const rootReducer = combineReducers({
  reports: reportReducer,
  comments: commentReducer,
  form: reduxFormReducer,
  user: userReducer,
  app: appReducer
});

export default rootReducer;
