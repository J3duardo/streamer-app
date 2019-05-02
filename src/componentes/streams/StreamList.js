import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.requestStreams()
  }

  renderAdminButtons = (stream) => {
    if(stream.userId === this.props.currentUser) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      )
    }
  }

  renderStreams = () => {
    return this.props.streamsArray.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {this.renderAdminButtons(stream)}
            {stream.title}
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderStreams()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streamsArray: Object.values(state.streams),
    currentUser: state.auth.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestStreams: () => {
      dispatch(fetchStreams())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
