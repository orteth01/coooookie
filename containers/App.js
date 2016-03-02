import React, { Component } from 'react';
import cookie from 'react-cookie';
import {LogIn, Welcome} from '../components';

export default class MyApp extends Component {
  constructor(props) {
    super(props);

    const userId = cookie.load('userId');
    const userIdForget = cookie.load('userIdForget');
    
    if(userId){
      this.state = { 
        loggedIn: true,
        userId: userId
      };
    }else if(userIdForget){
      this.state = { 
        loggedIn: true,
        userId: userIdForget
      };
      cookie.remove('userIdForget');
    }else{
      this.state = {
        loggedIn: false
      }
    }  
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? <Welcome data={this.state.userId} /> : <LogIn />}
      </div>
    );
  }
}