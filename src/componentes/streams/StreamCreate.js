import React, { Component } from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createStream} from "../../actions";

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
    this.props.createNewStream(formValues, this.props.userId);
  }

  render() {
    if(this.props.userId) {
      return (
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmitHandler)}>
          <Field name="title" component={this.renderInput} placeholder="Title..." label="Enter Title:"/>
          <Field name="description" component={this.renderInput} placeholder="Description" label="Enter Description:"/>
          <button className="ui button primary">Submit</button>
        </form>
      );
    } else {
      return (
        <h2>You must be logged-in in order to create streams</h2>
      )
    }
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

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId
  }
}

const form = reduxForm({
  form: "StreamCreate",
  validate: validateForm
})(StreamCreate);

const mapDispatchToProps = (dispatch) => {
  return {
    createNewStream: (formValues, userId) => {
      dispatch(createStream(formValues, userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(form)

