import React, {Component} from 'react';

import './UserLoginStatus.css';

class UserLoginStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='userLoginStatus'>
        <div className='userDisplayMessage'>
        Hi, Guest
        </div>
        <div className='loginStatus'>
        <a href='\' className="loginLink">Log In</a>
        </div>
      </div>
      );
  }
}

export default UserLoginStatus;