import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchSingleStream} from "../../actions";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.streamToEdit(this.props.match.params.id)
  }

  render() {
    console.log(this.props.stream)
    return (
      <div>
        Stream Edit
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
