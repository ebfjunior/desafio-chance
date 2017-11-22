import {
  OPEN_REPORT_PANEL,
  CLOSE_REPORT_PANEL,
  OPEN_DETAIL_PANEL,
  CLOSE_DETAIL_PANEL,
  REPORT_PANEL_NEW,
  REPORT_PANEL_EDIT
} from "../business/constants";
import _ from "lodash";

export default function(
  state = {
    form_panel_active: 0,
    detail_panel_active: 0,
    current_report_id: null,
    report_panel_type: REPORT_PANEL_NEW
  },
  action
) {
  switch (action.type) {
    case OPEN_REPORT_PANEL:
      return {
        ...state,
        form_panel_active: 1,
        report_panel_type: action.payload ? REPORT_PANEL_EDIT : REPORT_PANEL_NEW
      };
    case CLOSE_REPORT_PANEL:
      return { ...state, form_panel_active: 0 };
    case OPEN_DETAIL_PANEL:
      return {
        ...state,
        detail_panel_active: 1,
        current_report_id: action.payload
      };
    case CLOSE_DETAIL_PANEL:
      return { ...state, detail_panel_active: 0, current_report_id: null };
  }
  return state;
}
