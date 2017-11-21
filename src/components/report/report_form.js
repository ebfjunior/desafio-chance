import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

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
    console.log(field);
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
          <option value="S1lFOVbxpW">User interface</option>
          <option value="B1-KdVWxpZ">Application behavior</option>
          <option value="BkGKOEWg6W">Wrong content</option>
          <option value="ry7YOEWe6-">Localization</option>
        </Field>

        <Field
          label="Status"
          name="status"
          component={this.renderSelectField}
          className="col-xs-12 col-sm-6"
        >
          <option value="1">New</option>
          <option value="2">Resolving</option>
          <option value="3">Resolved</option>
          <option value="4">With Errors</option>
          <option value="5">Feedback</option>
          <option value="6">Closed</option>
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
