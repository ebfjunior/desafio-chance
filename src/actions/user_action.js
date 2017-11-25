import axios from "axios";
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

export async function loginUser(values, callback = function() {}) {
  return dispatch => {
    const user = new User(values);
    const request = user.login();

    request.then(async function(response) {
      return new Promise(async (resolve, reject) => {
        axios.interceptors.request.use(function(config) {
          config.headers = config.headers || {};
          config.headers.Authorization = response.data.token;
          return config;
        });
console.log('1.1');

        await dispatch({
          type: LOGIN_USER,
          payload: request
        });
console.log('1.2');
        callback();
        resolve(response);
      });
    });
  }
}

export function logoutUser(callback = function() {}) {
  callback();

  return {
    type: LOGOUT_USER
  };
}
