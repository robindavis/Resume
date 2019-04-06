import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { styles } from './RootSideNavigationBarStyle';
import SidebarNavigationList from '../SidebarNavigationList/SidebarNavigationList';
import * as RootAction from '../../../GlobalState/Actions/RootAction';

class RootSideNavigationBar extends Component {
  onSidebarToggle = (status) => {
    this.props.changeSideBarStatus(status);
  };

  render() {
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={this.props.isSideBarOpened}
        onClose={event => this.onSidebarToggle(false)}
        onOpen={event => this.onSidebarToggle(true)}
      >
      <SidebarNavigationList />
      </SwipeableDrawer>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RootSideNavigationBar));