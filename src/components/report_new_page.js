import React, { Component } from "react";

import ReportForm from "./report/report_form";
import Report from "../business/report";

export default class ReportNewPage extends Component {
  submit(values) {
    console.log(values);
    const report = new Report(values);
    report.save(() => {
      this.props.history.push("/");
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ReportForm onSubmit={this.submit.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
