import React from 'react';
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const renderActions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  )
  
  const onDismissHandler = () => {
    history.push("/")
  }

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Stream"
        content="re you sure you want to delete this stream?"
        actions={renderActions}
        onDismiss={onDismissHandler}
      />
    </div>
  );
}

export default StreamDelete;