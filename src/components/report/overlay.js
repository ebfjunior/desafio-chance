import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { closeReportPanel } from "../../actions/app_action";

class Overlay extends Component {
  onOverlayClick() {
    this.props.closeReportPanel();
  }
  render() {
    return (
      <div
        className={`overlay ${this.props.app.form_panel_active
          ? "visible"
          : "invisible"}`}
        onClick={this.onOverlayClick.bind(this)}
      />
    );
  }
}

function mapStateToProps({ app }) {
  return { app };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeReportPanel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
