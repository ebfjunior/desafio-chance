import { FETCH_REPORTS } from "../business/constants";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_REPORTS:
      return _.mapKeys(action.payload.data, "id");
  }
  return state;
}
