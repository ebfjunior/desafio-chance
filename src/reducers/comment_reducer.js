import { FETCH_COMMENTS } from "../business/constants";
import _ from "lodash";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return [...action.payload.data];
  }
  return state;
}
