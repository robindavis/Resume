import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as RootAction from '../../../GlobalState/Actions/RootAction';
import './SideBarButton.css';

class SideBarButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleSidebarNavigation = () => {
    this.props.changeSideBarStatus(!this.props.isSideBarOpened);
    console.log('Clicked me');
  };

  render() {
    return (
      <div className='sideBarButton' onClick={this.toggleSidebarNavigation}>
        &#9776; Menu
      </div>
      );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isSideBarOpened: state.isSideBarOpened
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSideBarStatus: isSideBarOpened => dispatch(RootAction.changeSideBarStatus(isSideBarOpened))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarButton);