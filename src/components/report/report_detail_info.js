import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  openReportPanel,
  closeReportPanel,
  closeDetailPanel
} from "../../actions/app_action";
import { destroyReport } from "../../actions/report_action";
import Report from "../../business/report";

import { mapBadgeColors } from "../../business/constants";
import Status from "../../business/status";
import Category from "../../business/category";

class ReportDetailInfo extends Component {
  onEditClick(e) {
    this.props.openReportPanel(e.currentTarget.dataset.id);
  }
  onDeleteClick(e) {
    const report = new Report(this.props.reports[e.currentTarget.dataset.id]);
    this.props.destroyReport(report, () => {
      this.props.closeReportPanel();
      this.props.closeDetailPanel();
    });
  }
  render() {
    const report = this.props.reports[this.props.app.current_report_id] || {};

    const date = new Date(report.createdAt);
    return (
      <div className="col-xs-12 col-md-6 detail-info">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="row">
              <div className="col-xs-12 legend">Status</div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <span className={`badge ${mapBadgeColors[report.status]}`}>
                  {Status[report.status]}
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="row">
              <div className="col-xs-12 legend">Category</div>
            </div>
            <div className="row">
              <div className="col-xs-12">{Category[report.categoryId]}</div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="row">
              <div className="col-xs-12 legend">Assigned to</div>
            </div>
            <div className="row">
              <div className="col-xs-12">{report.userId}</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 legend">Description</div>
          <p className="col-xs-12 text-justify">{report.description}</p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="row">
              <div className="col-xs-12 legend">Created at</div>
            </div>
            <div className="row">
              <div className="col-xs-12">{date.toDateString()}</div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="row">
              <div className="col-xs-12 legend">Assigned to</div>
            </div>
            <div className="row">
              <div className="col-xs-12">{report.userId}</div>
            </div>
          </div>
        </div>
        <div className="row report-info-actions">
          <div className="col-xs-12">
            <a
              href="#"
              className="btn btn-primary btn-hollow blue-text"
              data-id={report.id}
              onClick={this.onEditClick.bind(this)}
            >
              EDIT
            </a>
            <a
              href="#"
              className="btn btn-chance-red btn-hollow chance-red-text"
              data-id={report.id}
              onClick={this.onDeleteClick.bind(this)}
            >
              DELETE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ reports, app, users }) {
  return { reports, app, users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { openReportPanel, closeReportPanel, closeDetailPanel, destroyReport },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportDetailInfo);
