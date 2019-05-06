import React, { Component } from 'react';
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchSingleStream} from "../../actions";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.streamToDelete(this.props.match.params.id)
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button" onClick={this.onDismissHandler}>Cancel</button>
      </React.Fragment>
    )
  }

  onDismissHandler = () => {
    history.push("/")
  }

  render() {
    return (
      <div>
        Stream Delete
        <Modal
          title="Delete Stream"
          content={`Are you sure you want to delete the stream ${this.props.stream.title}?`}
          actions={this.renderActions()}
          onDismiss={this.onDismissHandler}
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
    delete: (id) => {
      dispatch(deleteStream(id))
    },
    streamToDelete: (id) => {
      dispatch(fetchSingleStream(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);