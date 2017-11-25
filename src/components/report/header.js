import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";

import { logoutUser } from "../../actions/user_action";
import User  from '../../business/user';

class Header extends Component {
  onLogoutClick() {
    this.props.logoutUser(() => {
      this.props.history.push("/login");
    });
  }
  render() {
    const currentUser = User.getStorage();
    return (
      <div>
        <img src={require("../../images/chance_simplified_logo.svg")} />
        <div className="pull-right">
          <span className="header-user-name">{`${currentUser
            .firstName} ${currentUser.lastName}`}</span>
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
