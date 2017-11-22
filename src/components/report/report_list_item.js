import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { openDetailPanel } from "../../actions/app_action";
import { fetchComments } from "../../actions/comment_action";

import { mapBadgeColors } from "../../business/constants";
import Status from "../../business/status";
import Category from "../../business/category";

class ReportListItem extends Component {
  onTrClick(e) {
    this.props.fetchComments(e.currentTarget.dataset.id);
    this.props.openDetailPanel(e.currentTarget.dataset.id);
  }
  render() {
    const { props } = this;

    return (
      <tr data-id={props.report.id} onClick={this.onTrClick.bind(this)}>
        <td>
          <span className={`badge ${mapBadgeColors[props.report.status]}`}>
            {Status[props.report.status]}
          </span>
        </td>
        <td>{props.report.title}</td>
        <td>{Category[props.report.categoryId]}</td>
        <td>{props.report.userId}</td>
        <td>{props.report.createdAt}</td>
      </tr>
    );
  }
}

// function mapStateToProps({ reports }) {
//   return { reports };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openDetailPanel, fetchComments }, dispatch);
}

export default connect(null, mapDispatchToProps)(ReportListItem);
