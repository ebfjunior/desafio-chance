import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { mapBadgeColors } from "../../business/constants";
import Status from "../../business/status";
import Category from "../../business/category";

class ReportDetailInfo extends Component {
  render() {
    const report = this.props.reports[this.props.app.current_report_id] || {};

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
              <div className="col-xs-12">{report.createdAt}</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 legend">Description</div>
          <p className="col-xs-12 text-justify">{report.description}</p>
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

export default connect(mapStateToProps)(ReportDetailInfo);
