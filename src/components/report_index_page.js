import React, { Component } from "react";

import ReportList from "./report/report_list";

export default class ReportIndexPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-2">
          </div>
          <div className="col-xs-12 col-md-10">
            <ReportList />
          </div>
        </div>
      </div>
    );
  }
}
