import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchComments, postComment } from "../../actions/comment_action";
import Comment from "../../business//comment";

class ReportDetailComments extends Component {
  postComment() {
    const commentTextarea = document.getElementById("comment-field");
    const comment = new Comment({
      reportId: this.props.app.current_report_id,
      userId: "HkYd4bl6Z",
      content: commentTextarea.value
    });
    this.props.postComment(comment, () => {
      commentTextarea.value = "";
    });
  }
  renderComment() {
    return this.props.comments.map(comment => {
      const date = new Date(comment.createdAt);
      
      return (
        <div key={comment.id} className="comment-item">
          <div className="row">
            <div className="col-xs-12 comment-content">{comment.content}</div>
            <div className="col-xs-12 comment-info">
              {`${this.props.users[comment.userId].firstName} ${this.props.users[comment.userId].lastName}`} - {date.toDateString()}
            </div>
          </div>
        </div>
      )
    });
  }
  render() {
    return (
      <div className="col-xs-12 col-md-6 detail-comments">
        <div className="row comment-list">
          <div className="col-xs-12">{this.renderComment.call(this)}</div>
        </div>
        <div className="row new-comment">
          <div className="col-xs-12">
            <textarea
              id="comment-field"
              name="comment"
              placeholder="Type a comment..."
            />
          </div>
          <div className="col-xs-12">
            <a
              href="#"
              className="pull-right"
              onClick={this.postComment.bind(this)}
            >
              Post
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ reports, comments, app, users }) {
  return { reports, comments, app, users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments, postComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ReportDetailComments
);
