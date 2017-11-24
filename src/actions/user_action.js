import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../business/constants";
import User from "../business/user";

export function registerUser(values, callback = function() {}) {
  const user = new User(values);
  const request = user.insert().then(callback());

  return {
    type: REGISTER_USER,
    payload: request
  };
}

export function loginUser(values, callback = function() {}) {
  const user = new User(values);
  const request = user.login().then(callback());

  return {
    type: LOGIN_USER,
    payload: request
  };
}

export function logoutUser(callback = function() {}) {
  callback();

  return {
    type: LOGOUT_USER
  };
}
