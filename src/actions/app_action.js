import { OPEN_REPORT_PANEL, CLOSE_REPORT_PANEL } from "../business/constants";

export function openReportPanel(){
  return {
    type: OPEN_REPORT_PANEL
  };
}

export function closeReportPanel(){
  return {
    type: CLOSE_REPORT_PANEL
  };
}