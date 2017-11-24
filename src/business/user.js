import axios from "axios";

import { ROOT_WS_URL, TOKEN } from "./constants";

export default class User {
  constructor(values) {
    const { id, firstName, lastName, email, password } = values;

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  login() {
    const { email, password } = this;

    const url = `${ROOT_WS_URL}/login`;
    const request = axios.post(url, {
      email,
      password
    });

    return request;
  }

  insert() {
    const { id, firstName, lastName, email, password } = this;

    const url = `${ROOT_WS_URL}/register`;
    const request = axios.post(url, {
      firstName,
      lastName,
      email,
      password
    });

    return request;
  }

  static getAll() {
    const url = `${ROOT_WS_URL}/user`;

    const request = axios.get(url);

    return request;
  }
}
