import {
  FETCH_REPORTS,
  DESTROY_REPORT,
  SAVE_REPORT
} from "../business/constants";
import Report from "../business/report";

export function fetchReports() {
  return {
    type: FETCH_REPORTS,
    payload: Report.getAll()
  };
}

export function saveReport(report, callback) {
  const request = report.save().then(callback());

  return {
    type: SAVE_REPORT,
    payload: request
  };
}

export function destroyReport(report, callback) {
  const request = report.destroy().then(callback());

  return {
    type: DESTROY_REPORT,
    payload: report.id
  };
}
