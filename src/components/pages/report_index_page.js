import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Sidebar from "../report/sidebar";
import ReportList from "../report/report_list";
import ReportFormPanel from "../report/report_form_panel";
import ReportDetailPanel from "../report/report_detail_panel";
import Overlay from "../report/overlay";

class ReportIndexPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      if (!Object.keys(this.props.user).length)
        this.props.history.push("/login");
      console.log("foi");
    }, 100);
  }
  render() {
    return (
      <div>
        <div className="container-fluid wrapper index">
          <div className="row">
            <div className="col-xs-12 col-md-2 wrapper sidebar">
              <Sidebar />
            </div>
            <div className="col-xs-12 col-md-10 no-padding">
              <ReportList />
              <ReportFormPanel />
              <ReportDetailPanel />
            </div>
          </div>
        </div>
        <Overlay />
      </div>
    );
  }
}

function mapStateToProps({ reports, user }) {
  return { user };
}

export default connect(mapStateToProps)(ReportIndexPage);
