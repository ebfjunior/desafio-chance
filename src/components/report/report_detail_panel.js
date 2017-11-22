import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { closeDetailPanel } from "../../actions/app_action";
import ReportDetailInfo from "./report_detail_info";

class ReportDetailPanel extends Component {
  renderHeader() {
    const report = this.props.reports[this.props.app.current_report_id] || {};
    return (
      <div className="row panel-header text-center">
        <div className="col-xs-12">
          {report.title}
          <a
            href="#"
            className="pull-left chance-red-text cancel-panel-link"
            onClick={this.props.closeDetailPanel}
          >
            <span
              className="glyphicon glyphicon-chevron-down blue-text"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div
        className={`container detail-panel col-xs-12 col-md-10 ${this.props.app
          .detail_panel_active
          ? "visible"
          : "invisible"}`}
      >
        {this.renderHeader.call(this)}
        <div className="row panel-content">
          <ReportDetailInfo />
          <div className="col-xs-12 col-md-6 detail-comments" />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ reports, app }) {
  return { reports, app };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeDetailPanel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportDetailPanel);
