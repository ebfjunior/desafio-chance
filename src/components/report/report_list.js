import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchReports } from "../../actions/report_action";

class ReportList extends Component {
  componentDidMount() {
    this.props.fetchReports();
  }
  renderReportLines() {
    return this.props.reports.map(report => {
      return (
        <tr key={report.id}>
          <td>{report.title}</td>
          <td>{report.description}</td>
        </tr>
      );
    });
  }
  render() {
    if (!this.props.reports.length) return <div>Carregando...</div>;

    return (
      <table className="table col-xs-12">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{this.renderReportLines.call(this)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ reports }) {
  return { reports };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchReports }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportList);
