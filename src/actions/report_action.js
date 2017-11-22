import { FETCH_REPORTS, DESTROY_REPORT } from "../business/constants";
import Report from "../business/report";

export function fetchReports() {
  return {
    type: FETCH_REPORTS,
    payload: Report.getAll()
  };
}

export function destroyReport(report, callback) {
  const request = report.destroy().then(callback());
  console.log(DESTROY_REPORT);
  return {
    type: DESTROY_REPORT,
    payload: report.id
  };
}
