import React, {Component} from 'react';

import SidebarCloseButton from '../SidebarCloseButton/SidebarCloseButton';
import SidebarNavigationList from '../SidebarNavigationList/SidebarNavigationList';
import './RootSideNavigationBar.css';

class RootSideNavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='rootSideNavigationBar'>
        <SidebarCloseButton />
        <SidebarNavigationList />
      </div>
      );
  }
}

export default RootSideNavigationBar;