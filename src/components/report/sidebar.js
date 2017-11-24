import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { openReportPanel } from "../../actions/app_action";

class Sidebar extends Component {
  onButtonClick() {
    this.props.openReportPanel();
  }
  render() {
    return (
      <div>
        <div className="row">
          <ul>
            <li className="active">All reports</li>
            <li>My reports</li>
            <li>Assigned to me</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button
              type="button"
              className="btn btn-primary full-width"
              onClick={this.onButtonClick.bind(this)}
            >
              ADD REPORT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openReportPanel }, dispatch);
}

export default connect(null, mapDispatchToProps)(Sidebar);
