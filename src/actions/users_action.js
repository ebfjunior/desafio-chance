import { FETCH_USERS } from "../business/constants";
import User from "../business/user";

export function fetchUsers(callback = function() {}) {
  const request = User.getAll();
  request.then(callback());

  return {
    type: FETCH_USERS,
    payload: request
  };
}
