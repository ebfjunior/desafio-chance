import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../business/constants";

import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action.payload);
      return { ...action.payload.data.user, token: action.payload.data.token };
    case LOGOUT_USER:
      return {};
  }
  return state;
}
