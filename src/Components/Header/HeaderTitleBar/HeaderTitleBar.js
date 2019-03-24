import React, {Component} from 'react';

import SiteIcon from '../SiteIcon/SiteIcon';
import UserLoginStatus from '../UserLoginStatus/UserLoginStatus';
import TextDisplay from '../../../Utilities/DOM/TextDisplay/TextDisplay';
import './HeaderTitleBar.css';

class HeaderTitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="headerTitleBar">
        <SiteIcon />
        <TextDisplay 
          text="Heading Title" 
          basisWidth="60%"
          verticalPosition="top"
        />
        <UserLoginStatus />
      </div>
      );
  }
}

export default HeaderTitleBar;