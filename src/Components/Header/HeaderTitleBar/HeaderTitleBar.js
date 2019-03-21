import React, {Component} from 'react';

import SiteIcon from '../SiteIcon/SiteIcon';
import TitleText from '../TitleText/TitleText';
import UserLoginStatus from '../UserLoginStatus/UserLoginStatus';
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
        <TitleText />
        <UserLoginStatus />
      </div>
      );
  }
}

export default HeaderTitleBar;