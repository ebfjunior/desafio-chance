import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchComments } from "../../actions/comment_action";

class ReportDetailComments extends Component {
  renderComment() {
    return this.props.comments.map(comment => (
      <div key={comment.id}>{comment.content}</div>
    ));
  }
  render() {
    return (
      <div className="col-xs-12 col-md-6 detail-comments">
        {this.renderComment.call(this)}
      </div>
    );
  }
}

function mapStateToProps({ reports, comments, app }) {
  return { reports, comments, app };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ReportDetailComments
);
