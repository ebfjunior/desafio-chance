import { FETCH_COMMENTS } from "../business/constants";
import Report from "../business/report";

export function fetchComments(id) {
  const report = new Report({ id });
  const request = report.getComments();

  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}
