import React, { Component } from 'react';
import cookie from 'react-cookie';

export default class Welcome extends Component {

  constructor(props) {
    super(props);
  }

  reloadPage(){
    location.reload();
  }

  logOut(){
    cookie.remove('userId');
    this.reloadPage();
  }

  render() {
    const userId = this.props.data;
    return (
      <div>
        <div>Welcome, <strong>{userId}</strong></div>
        <p>If you selected 'Remember Me', this page will stay the same upon reload. If not, you will be returned to the log in prompt upon reload.</p>
        <button onClick={this.reloadPage.bind(this)}>Reload Page</button>
        <button onClick={this.logOut.bind(this)}>Log Out</button>
      </div>
    );
  }
}