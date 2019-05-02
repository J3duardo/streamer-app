import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";
import {Link} from "react-router-dom";

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

  renderCreateBtn = () => {
    if(this.props.currentUser) {
      return (
        <div style={{textAlign: "right"}}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
    return null;
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
        {this.renderCreateBtn()}
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
