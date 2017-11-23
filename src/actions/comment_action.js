import { FETCH_COMMENTS, POST_COMMENT } from "../business/constants";
import Report from "../business/report";

export function fetchComments(id) {
  const report = new Report({ id });
  const request = report.getComments();

  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}

export function postComment(comment, callback = function() {}) {
  const request = comment.insert().then(callback());

  return {
    type: POST_COMMENT,
    payload: request
  };
}
