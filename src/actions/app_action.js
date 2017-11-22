import {
  OPEN_REPORT_PANEL,
  CLOSE_REPORT_PANEL,
  OPEN_DETAIL_PANEL,
  CLOSE_DETAIL_PANEL
} from "../business/constants";

export function openReportPanel() {
  return {
    type: OPEN_REPORT_PANEL
  };
}

export function closeReportPanel() {
  return {
    type: CLOSE_REPORT_PANEL
  };
}

export function openDetailPanel(id) {
  return {
    type: OPEN_DETAIL_PANEL,
    payload: id
  };
}

export function closeDetailPanel() {
  return {
    type: CLOSE_DETAIL_PANEL
  };
}
