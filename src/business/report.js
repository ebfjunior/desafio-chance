import axios from "axios";
import _ from "lodash";

import { ROOT_WS_URL } from "./constants";

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
    const request = axios.post(url, {
      title,
      status,
      description,
      userId,
      categoryId
    });

    return request;
  }

  update() {
    const { id, title, categoryId, status, description, userId } = this;

    const url = `${ROOT_WS_URL}/report`;
    const request = axios.put(url, {
      id,
      title,
      status,
      description,
      userId,
      categoryId
    });

    return request;
  }

  destroy() {
    const { id, title, categoryId, status, description, userId } = this;

    const url = `${ROOT_WS_URL}/report/${id}`;
    const request = axios.delete(url);

    return request;
  }

  getComments() {
    const url = `${ROOT_WS_URL}/report/${this.id}/comment`;
    const request = axios.get(url);

    return request;
  }

  static getAll() {
    const reportsURL = `${ROOT_WS_URL}/report`;
    const reportsRequest = axios.get(reportsURL);

    let data;

    reportsRequest.then(function(response) {
      const reports = response.data;
      const usersURL = `${ROOT_WS_URL}/user`;

      const usersRequest = axios.get(usersURL);

      const reportsResponse = usersRequest.then(response => {
        const users = _.mapKeys(response.data, "id");

        return reports.map(report => {
          report["user"] = users[report.userId];
          console.log("step 1");
        });
      });

      return new Promise((resolve, reject) => {
        resolve(reportsResponse);
      });
    });

    return reportsRequest;
  }
}
