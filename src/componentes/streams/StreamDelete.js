import React, { Component } from 'react';
import Modal from "../Modal";
import {connect} from "react-redux";
import {deleteStream, fetchSingleStream} from "../../actions";
import {Link} from "react-router-dom";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.streamToDelete(this.props.match.params.id)
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <button onClick={() => this.props.delete(this.props.match.params.id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  streamContent = () => {
    if(!this.props.stream.title) {
      return "Are you sure you want to delete this stream?"
    }

    return `Are you sure you want to delete the stream ${this.props.stream.title}`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.streamContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismissHandler}
      />
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