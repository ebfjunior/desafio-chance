import { FETCH_USERS } from "../business/constants";

import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload.data, "id");
  }
  return state;
}
