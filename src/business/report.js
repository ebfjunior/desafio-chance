import axios from "axios";

import { ROOT_WS_URL, TOKEN } from "./constants";

export default class Report {
  constructor(values) {
    const { title, categoryId, status, description, userId } = values;

    this.title = title;
    this.categoryId = categoryId;
    this.status = status;
    this.description = description;
    this.userId = userId;
  }

  save(callback) {
    const { title, categoryId, status, description, userId } = this;

    const url = `${ROOT_WS_URL}/report`;
    const request = axios.post(
      url,
      {
        title,
        status,
        description,
        userId,
        categoryId
      },
      {
        headers: {
          Authorization: TOKEN
        }
      }
    );

    request.then(response => {
      if (typeof callback === "function") callback();
    });
  }

  static getAll() {
    const url = `${ROOT_WS_URL}/report`;
    const request = axios.get(url, {
      headers: {
        Authorization: TOKEN
      }
    });

    return request;
  }
}
