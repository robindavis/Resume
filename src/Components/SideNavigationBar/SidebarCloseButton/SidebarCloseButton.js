import React, {Component} from 'react';

import './SidebarCloseButton.css';

class SidebarCloseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='sidebarCloseButton'>
        <div className='crossIconSpace'></div>
        <div className="crossIconContainer">
        <div className='crossIcon'>
        &times;
        </div>
        </div>
      </div>
      );
  }
}

export default SidebarCloseButton;