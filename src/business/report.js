import axios from "axios";

import { ROOT_WS_URL, TOKEN } from "./constants";

export default class Report {
  constructor(values) {
    const { id, title, categoryId, status, description, userId } = values;

    this.id = id;
    this.title = title;
    this.categoryId = categoryId;
    this.status = status;
    this.description = description;
    this.userId = userId;
  }

  isNew() {
    return !this.id;
  }

  save(callback) {
    return this.isNew() ? this.insert() : this.update();
  }

  insert() {
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

    return request;
  }

  update() {
    const { id, title, categoryId, status, description, userId } = this;

    const url = `${ROOT_WS_URL}/report`;
    const request = axios.put(
      url,
      {
        id,
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

    return request;
  }

  destroy() {
    const { id, title, categoryId, status, description, userId } = this;

    const url = `${ROOT_WS_URL}/report/${id}`;
    const request = axios.delete(url, {
      headers: {
        Authorization: TOKEN
      }
    });

    return request;
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
