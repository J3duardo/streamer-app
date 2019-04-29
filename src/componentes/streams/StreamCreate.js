import React, { Component } from 'react';
import {Field, reduxForm} from "redux-form";

class StreamCreate extends Component {
  renderInput = (formProps) => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input
          type="text"
          placeholder={formProps.placeholder}
          {...formProps.input}
        />      
      </div>
    )
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} placeholder="Title..." label="Enter Title:"/>
        <Field name="description" component={this.renderInput} placeholder="Description" label="Enter Description:"/>
      </form>
    );
  }
}

export default reduxForm({
  form: "StreamCreate"
})(StreamCreate);

