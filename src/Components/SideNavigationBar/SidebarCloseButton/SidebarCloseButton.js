import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as RootAction from '../../../GlobalState/Actions/RootAction';
import './SidebarCloseButton.css';

class SidebarCloseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

closeSideBar = () => {
  this.props.changeSideBarStatus(false);
};

  render() {
    return (
      <div className='sidebarCloseButton'>
        <div className='crossIconSpace'></div>
        <div className="crossIconContainer">
        <div className='crossIcon' onClick={this.closeSideBar}>
        &times;
        </div>
        </div>
      </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSideBarStatus: isSideBarOpened => dispatch(RootAction.changeSideBarStatus(isSideBarOpened))
  };
};

export default connect(null,mapDispatchToProps)(SidebarCloseButton);