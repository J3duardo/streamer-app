import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.requestStreams()
  }

  render() {
    return (
      <div>
        Stream List
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestStreams: () => {
      dispatch(fetchStreams())
    }
  }
}

export default connect(null, mapDispatchToProps)(StreamList);
