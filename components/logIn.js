import React, { Component } from 'react';
import cookie from 'react-cookie';

export default class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rememberUser: false
    };
  }

  logIn(){
    const userId = this.refs.userId.value;
    // Validate that name was entered
    if (userId === '') {
      alert("please enter a name");
      return;
    }

    if (this.state.rememberUser){
      cookie.save('userId', userId, { path: '/' });
    }else{
      cookie.save('userIdForget', userId, { path: '/'});
    }

    location.reload()
  }

  rememberUser(event){
    this.setState({
      rememberUser: event.target.checked
    })
  }

  render() {
    return (
      <div>
        <input ref="userId" type="text" placeholder="Enter Name" /><br />
        <input type="checkbox" id="save" onChange={this.rememberUser.bind(this)}/><label htmlFor="save">Remember me!</label><br />
        <button onClick={this.logIn.bind(this)}>Log In</button>
      </div>
    );
  }
}