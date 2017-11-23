import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  renderTextField(field) {
    return (
      <div className={`form-group ${field.className}`}>
        <label htmlFor={field.input.name}>{field.label}</label>
        <input
          id={field.input.name}
          className="form-control"
          type={field.type || "text"}
          {...field.input}
        />
      </div>
    );
  }

  renderSelectField(field) {
    return (
      <div className={`form-group ${field.className}`}>
        <label htmlFor={field.input.name}>{field.label}</label>
        <select id={field.input.name} className="form-control" {...field.input}>
          {field.children}
        </select>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          label="Email"
          type="email"
          component={this.renderTextField}
          className="col-xs-12"
        />
        <Field
          name="password"
          label="Password"
          type="password"
          component={this.renderTextField}
          className="col-xs-12"
        />
        <div className="row">
          <button type="submit" className="login-submit-button">
            LOG IN
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "login" })(LoginForm);
