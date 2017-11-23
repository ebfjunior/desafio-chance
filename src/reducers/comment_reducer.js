import { FETCH_COMMENTS, POST_COMMENT } from "../business/constants";
import _ from "lodash";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return [...action.payload.data];
    case POST_COMMENT:
      return [...state, action.payload.data];
  }
  return state;
}
