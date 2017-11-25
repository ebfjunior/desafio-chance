import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { REPORT_PANEL_EDIT } from "../../business/constants";

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
          type={field.type || "text"}
          {...field.input}
        />
        <span className="form-error"> {field.meta.touched? field.meta.error : ''}</span>
      </div>
    );
  }

  renderSelectField(field) {
    return (
      <div className={`form-group ${field.className}`}>
        <label htmlFor={field.input.name}>{field.label}</label>
        <select id={field.input.name} className="form-control" {...field.input}>
          <option value="">Choose one...</option>
          {field.children}
        </select>
        <span className="form-error"> {field.meta.touched? field.meta.error : ''}</span>
      </div>
    );
  }

  renderTextareaField(field) {
    return (
      <div className={`form-group ${field.className}`}>
        <label htmlFor={field.input.name}>{field.label}</label>
        <textarea id={field.input.name} className="form-control" {...field.input}>
          {field.children}
        </textarea>
        <span className="form-error"> {field.meta.touched? field.meta.error : ''}</span>
      </div>
    );
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="id" component="hidden" />
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

          <Field
            label="Description"
            name="description"
            component={this.renderTextareaField}
            className="col-xs-12"
          />

        <Field
          label="Assigned to"
          name="userId"
          component={this.renderSelectField}
          className="col-xs-12"
        >
          {Object.keys(this.props.users).map(idx => {
            return (
              <option key={idx} value={idx}>
                {`${this.props.users[idx].firstName} ${this.props.users[idx]
                  .lastName}`}
              </option>
            );
          })}
        </Field>
        <button type="submit" className="btn btn-primary pull-right">
          SAVE
        </button>
      </form>
    );
  }
}

const validate = function(values){
    const fields = ["title", "categoryId", "status", "userId", "description"];
    const errors = {};

    fields.forEach(field => {
      if(!values[field]) errors[field] = "Field should be filled";
    });

    return errors;
  }

ReportForm = reduxForm({ form: "report", validate, enableReinitialize: true })(
  ReportForm
);

function mapStateToProps({ reports, app, users }) {
  const report =
    app.report_panel_type == REPORT_PANEL_EDIT
      ? { ...reports[app.current_report_id] }
      : {};

  return { initialValues: report, users };
}

export default connect(mapStateToProps)(ReportForm);
