import React, { Component } from 'react';
import {connect} from "react-redux";
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = (formValues, userId) => {
    this.props.createNewStream(formValues, userId);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewStream: (formValues, userId) => {
      dispatch(createStream(formValues, userId))
    }
  }
}

export default connect(null, mapDispatchToProps)(StreamCreate)

