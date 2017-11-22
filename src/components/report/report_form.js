import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import Status from "../../business/status";
import Category from "../../business/category";

class ReportForm extends Component {
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
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  renderSelectField(field) {
    return (
      <div className={`form-group ${field.className}`}>
        <label htmlFor={field.input.name}>{field.label}</label>
        <select
          id={field.input.name}
          className="form-control"
          type="text"
          {...field.input}
        >
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
          name="title"
          label="Title"
          component={this.renderTextField}
          className="col-xs-12"
        />

        <Field
          label="Category"
          name="categoryId"
          component={this.renderSelectField}
          className="col-xs-12 col-sm-6"
        >
          {Object.keys(Category).map(idx => {
            return (
              <option key={idx} value={idx}>
                {Category[idx]}
              </option>
            );
          })}
        </Field>

        <Field
          label="Status"
          name="status"
          component={this.renderSelectField}
          className="col-xs-12 col-sm-6"
        >
          {Object.keys(Status).map(idx => {
            return (
              <option key={idx} value={idx}>
                {Status[idx]}
              </option>
            );
          })}
        </Field>

        <div className="form-group col-xs-12">
          <label htmlFor="description">Description</label>
          <Field
            name="description"
            component="textarea"
            className="form-control"
          />
        </div>

        <Field
          label="Assigned to"
          name="userId"
          component={this.renderSelectField}
          className="col-xs-12"
        >
          <option value="HkYd4bl6Z">Nicolas ANDRE</option>
        </Field>
        <button type="submit" className="btn btn-primary pull-right">
          SAVE
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: "report" })(ReportForm);
