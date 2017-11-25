import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers/root";
import ReportIndexPage from "./components/pages/report_index_page";
import UserLoginPage from "./components/pages/user_login_page";
import UserRegisterPage from "./components/pages/user_register_page";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/report" component={ReportIndexPage} />
          <Route path="/login" component={UserLoginPage} />
          <Route path="/register" component={UserRegisterPage} />
          <Route path="/" component={ReportIndexPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".app")
);
