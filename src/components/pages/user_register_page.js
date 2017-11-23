import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";

import RegisterForm from "../user/register_form";
import BrandLogo from "../user/brand_logo";

import { registerUser } from "../../actions/user_action";

class UserRegisterPage extends Component {
  onSubmit(values) {
    this.props.registerUser(values, () => {
      this.props.history.push("/login");
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
                  <Link to="/login" className="login-panel-button inactive">
                    LOGIN
                  </Link>
                  <Link to="/register" className="login-panel-button active">
                    REGISTER
                  </Link>
                </div>
              </div>
              <div className="row form-login-panel">
                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-xs-12">
                      <RegisterForm onSubmit={this.onSubmit.bind(this)} />
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
  return bindActionCreators({ registerUser }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(UserRegisterPage));
