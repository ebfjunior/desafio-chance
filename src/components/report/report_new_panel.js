import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { withRouter } from 'react-router-dom'

import { fetchReports } from "../../actions/report_action";
import { closeReportPanel } from "../../actions/app_action";

import ReportForm from "./report_form";
import Report from "../../business/report";

class ReportNewPanel extends Component {
  submit(values) {
    const report = new Report(values);
    report.save(() => {
      this.props.fetchReports();
      this.props.closeReportPanel();
      // this.props.history.push("/");
    });
  }
  render() {
    return (
      <div
        className={`container wrapper panel ${this.props.app.form_panel_active
          ? "visible"
          : "invisible"}`}
      >
        <div className="row">
          <div className="col-xs-12 panel-header text-center">
            Create a Report
            <a
              href="#"
              className="pull-left chance-red-text cancel-panel-link"
              onClick={this.props.closeReportPanel}
            >
              Cancel
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ReportForm onSubmit={this.submit.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ reports, app }) {
  return { reports, app };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchReports, closeReportPanel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportNewPanel);
// export default withRouter(connect(mapStateToProps)(ReportNewPanel));
