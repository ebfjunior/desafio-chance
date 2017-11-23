import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { closeReportPanel } from "../../actions/app_action";

class Header extends Component {
  render() {
    return <img src={require("../../images/chance_simplified_logo.svg")} />;
  }
}

function mapStateToProps({ user }) {
  return { user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeReportPanel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
