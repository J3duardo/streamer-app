import React, { Component } from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "542633267573-im2v8ed5ejgastcooclg0i7srs9s4ios.apps.googleusercontent.com",
        scope: "email"
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    isSignedIn ? this.props.onSignIn() : this.props.onSignOut()
  }

  onSignedIn = () => {
    this.auth.signIn()
  }

  onSignedOut = () => {
    this.auth.signOut()
  }

  renderAuthButton = () => {
    if (this.props.authentication === null) {
      return null;
    }else if (this.props.authentication) {
      return (
        <button className="ui red google button" onClick={this.onSignedOut}>
          <i className="google icon"/>
          Sign Out
        </button>
      )
    }else {
      return (
        <button className="ui red google button" onClick={this.onSignedIn}>
          <i className="google icon"/>
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.auth.isSignedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: () => {
      dispatch(signIn())
    },
    onSignOut: () => {
      dispatch(signOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
