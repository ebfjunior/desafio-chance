import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from 'axios';

import Sidebar from "../report/sidebar";
import ReportList from "../report/report_list";
import ReportFormPanel from "../report/report_form_panel";
import ReportDetailPanel from "../report/report_detail_panel";
import Overlay from "../report/overlay";
import Header from "../report/header";

import User from '../../business/user';

class ReportIndexPage extends Component {
  async componentWillMount(){
    await this.authenticateUser.call(this);
  }
  async componentWillReceiveProps(nextProps) {
    await this.authenticateUser.call(this);
  }
  authenticateUser() {
    const currentUser = User.getStorage();
    if (!currentUser){
      this.props.history.push("/login");
    }else{
      axios.interceptors.request.use(function(config) {
      config.headers = config.headers || {};
      config.headers.Authorization = currentUser.token;
      return config;
    });

    }

  }
  render() {
    if(!User.getStorage()) return (<div/>);
    return (
      <div>
        <div className="container-fluid wrapper index">
          <div className="row">
            <div className="col-xs-12 header">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-2 wrapper sidebar">
              <Sidebar />
            </div>
            <div className="col-xs-12 col-md-10 no-padding">
              <ReportList />
              <ReportDetailPanel />
            </div>
          </div>
        </div>
        <ReportFormPanel />
        <Overlay />
      </div>
    );
  }
}

function mapStateToProps({ reports, user }) {
  return { user };
}

export default connect(mapStateToProps)(ReportIndexPage);
