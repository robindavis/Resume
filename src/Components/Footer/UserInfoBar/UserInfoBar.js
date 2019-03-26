import React, {Component} from 'react';

import TextDisplay from '../../../Utilities/DOM/TextDisplay/TextDisplay';
import { getCurrentDate, getCurrentTime} from '../../../Utilities/Time/CurrentDateTime/CurrentDateTime';
import './UserInfoBar.css';

class UserInfoBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="userInfoBar">
        <TextDisplay 
          text={`Last Login: ${getCurrentDate()} ${getCurrentTime()}`} 
          basisWidth="50%"
          horizontalPosition="center"
          verticalPosition="center"
          fontSize="2.2vmin"
        />
        <TextDisplay 
          text={`Total Profiles: 0`} 
          basisWidth="50%"
          horizontalPosition="center"
          verticalPosition="center"
        />
      </div>
      );
  }
}

export default UserInfoBar;