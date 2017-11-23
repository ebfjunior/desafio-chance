import { REGISTER_USER, LOGIN_USER } from "../business/constants";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.payload.data.user, token: action.payload.data.token };
  }
  return state;
}
