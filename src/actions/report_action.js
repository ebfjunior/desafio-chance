import { FETCH_REPORTS } from "../business/constants";
import Report from "../business/report";

export function fetchReports() {
  return {
    type: FETCH_REPORTS,
    payload: Report.getAll()
  };
}
