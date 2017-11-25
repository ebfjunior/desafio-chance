import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../business/constants";

import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      const data = { ...action.payload.data.user, token: action.payload.data.token };
      sessionStorage.setItem('current_user', JSON.stringify(data));
      return data;
    case LOGOUT_USER:
      sessionStorage.clear();
      return {};
  }
  return state;
}
