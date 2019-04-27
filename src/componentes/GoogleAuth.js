import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "542633267573-im2v8ed5ejgastcooclg0i7srs9s4ios.apps.googleusercontent.com",
        scope: "email"
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({
          isSignedIn: this.auth.isSignedIn.get()
        });
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    })
  }

  onSignedIn = () => {
    this.auth.signIn()
  }

  onSignedOut = () => {
    this.auth.signOut()
  }

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    }else if (this.state.isSignedIn) {
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
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;
