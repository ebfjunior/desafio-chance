import {
  FETCH_REPORTS,
  DESTROY_REPORT,
  SAVE_REPORT
} from "../business/constants";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_REPORTS:
      return _.mapKeys(action.payload.data, "id");
    case DESTROY_REPORT:
      return _.omit(state, action.payload);
    case SAVE_REPORT:
      return { ...state, [action.payload.data.id]: action.payload.data };
  }
  return state;
}
