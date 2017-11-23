import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";

import LoginForm from "../user/login_form";
import BrandLogo from "../user/brand_logo";

import { loginUser } from "../../actions/user_action";

class UserLoginPage extends Component {
  onSubmit(values) {
    this.props.loginUser(values, () => {
      this.props.history.push("/");
    });
  }
  render() {
    return (
      <div>
        <div className="container user-screen">
          <BrandLogo />
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4 panel-user-screen">
              <div className="row header-login-panel">
                <div className="col-xs-12">
                  <Link to="/login" className="login-panel-button active">
                    LOGIN
                  </Link>
                  <Link to="/register" className="login-panel-button inactive">
                    REGISTER
                  </Link>
                </div>
              </div>
              <div className="row form-login-panel">
                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-12">
                      <LoginForm onSubmit={this.onSubmit.bind(this)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps({ reports, app }) {
//   return { reports, app };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(UserLoginPage));
