import React, {Component} from 'react';

import TextDisplay from '../../../Utilities/DOM/TextDisplay/TextDisplay';
import LinkDisplay from '../../../Utilities/DOM/LinkDisplay/LinkDisplay';
import './UserLoginStatus.css';

class UserLoginStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='userLoginStatus'>
        <TextDisplay text="Hi, Guest" basisWidth="50%"/>
        <LinkDisplay text="Log In" href="\" basisWidth="50%" />
      </div>
      );
  }
}

export default UserLoginStatus;