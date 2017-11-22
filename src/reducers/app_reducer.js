import { OPEN_REPORT_PANEL, CLOSE_REPORT_PANEL } from "../business/constants";
import _ from "lodash";

export default function(state = {report_panel_active: 0}, action) {
  switch (action.type) {
    case OPEN_REPORT_PANEL:
      return {...state, report_panel_active: 1};
    case CLOSE_REPORT_PANEL:
      return {...state, report_panel_active: 0};
  }
  return state;
}
