import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "542633267573-im2v8ed5ejgastcooclg0i7srs9s4ios.apps.googleusercontent.com",
        scope: "email"
      })
    })
  }
  render() {
    return (
      <div>
        Google Auth
      </div>
    );
  }
}

export default GoogleAuth;
