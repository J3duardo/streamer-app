import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchSingleStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.streamToEdit(this.props.match.params.id)
  }

  onSubmitHandler = (formValues) => {
    console.log(formValues)
  }

  render() {
    if(!this.props.streamToEdit) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={{title: this.props.stream.title, description: this.props.stream.description}}
          onSubmit={this.onSubmitHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    streamToEdit: (id) => {
      dispatch(fetchSingleStream(id))
    },
    editStream: () => {
      dispatch(editStream())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
