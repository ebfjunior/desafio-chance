import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";

import { logoutUser } from "../../actions/user_action";

class Header extends Component {
  onLogoutClick() {
    this.props.logoutUser(() => {
      this.props.history.push("/login");
    });
  }
  render() {
    return (
      <div>
        <img src={require("../../images/chance_simplified_logo.svg")} />
        <div className="pull-right">
          <span className="header-user-name">{`${this.props.user
            .firstName} ${this.props.user.lastName}`}</span>
          <a
            href="#"
            className="btn btn-primary btn-hollow blue-text"
            onClick={this.onLogoutClick.bind(this)}
          >
            LOG OUT
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
