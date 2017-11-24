import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchReports } from "../../actions/report_action";

import ReportListItem from "./report_list_item";

class ReportList extends Component {
  componentDidMount() {
    this.props.fetchReports();
  }
  renderReportLines() {
    return Object.keys(this.props.reports).map(id => {
      const report = this.props.reports[id];

      return <ReportListItem key={report.id} report={report} />;
    });
  }
  render() {
    if (!Object.keys(this.props.reports).length)
      return <div>Carregando...</div>;

    return (
      <table className="table table-hover col-xs-12">
        <thead>
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Category</th>
            <th>Assigned to</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>{this.renderReportLines.call(this)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ reports, user }) {
  return { reports, user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchReports }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);
