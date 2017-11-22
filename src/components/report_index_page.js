import React, { Component } from "react";

import Sidebar from "./report/sidebar";
import ReportList from "./report/report_list";
import ReportFormPanel from "./report/report_form_panel";
import ReportDetailPanel from "./report/report_detail_panel";
import Overlay from "./report/overlay";

export default class ReportIndexPage extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid wrapper index">
          <div className="row">
            <div className="col-xs-12 col-md-2 wrapper sidebar">
              <Sidebar />
            </div>
            <div className="col-xs-12 col-md-10 no-padding">
              <ReportList />
              <ReportFormPanel />
              <ReportDetailPanel />
            </div>
          </div>
        </div>
        <Overlay />
      </div>
    );
  }
}
