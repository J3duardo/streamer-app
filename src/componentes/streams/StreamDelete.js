import React, { Component } from 'react';
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends Component {
  renderActions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  )

  onDismissHandler = () => {
    history.push("/")
  }

  render() {
    return (
      <div>
        Stream Delete
        <Modal
          title="Delete Stream"
          content="re you sure you want to delete this stream?"
          actions={this.renderActions}
          onDismiss={this.onDismissHandler}
        />
      </div>
    );
  }
}

export default StreamDelete;