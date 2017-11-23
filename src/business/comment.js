import axios from "axios";

import { ROOT_WS_URL, TOKEN } from "./constants";

export default class Comment {
  constructor(values) {
    const { id, content, userId, reportId } = values;

    this.id = id;
    this.content = content;
    this.userId = userId;
    this.reportId = reportId;
  }

  insert() {
    const { content, userId, reportId } = this;

    const url = `${ROOT_WS_URL}/comment`;
    const request = axios.post(
      url,
      {
        content,
        userId,
        reportId
      },
      {
        headers: {
          Authorization: TOKEN
        }
      }
    );

    return request;
  }
}
