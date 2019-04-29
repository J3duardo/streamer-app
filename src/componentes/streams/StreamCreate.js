import React, { Component } from 'react';
import {Field, reduxForm} from "redux-form";

class StreamCreate extends Component {
  renderInput = (formProps) => {
    const className = `field ${formProps.meta.touched && formProps.meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input
          type="text"
          placeholder={formProps.placeholder}
          autoComplete="off"
          {...formProps.input}
        />
        {this.renderError(formProps.meta)}
      </div>
    )
  }

  renderError = (meta) => {
    if(meta.touched && meta.error) {
      return (
        <div className="ui error message" style={{display: "block", fontSize: "12px"}}>
          <div className="header">{meta.error}</div>
        </div>
      )
    }else {
      return null
    }
  }

  onSubmitHandler = (formValues) => {
    console.log(formValues);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmitHandler)}>
        <Field name="title" component={this.renderInput} placeholder="Title..." label="Enter Title:"/>
        <Field name="description" component={this.renderInput} placeholder="Description" label="Enter Description:"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validateForm = (formValues) => {
  const errors = {};

  if(!formValues.title) {
    errors.title = "You must enter a title"
  }

  if(!formValues.description) {
    errors.description = "You must enter a description"
  }

  return errors;
}

export default reduxForm({
  form: "StreamCreate",
  validate: validateForm
})(StreamCreate);

