import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SideBarButtonStyle';
import * as RootAction from '../../../GlobalState/Actions/RootAction';

class SideBarButton extends Component {
  toggleSidebarNavigation = () => {
    this.props.changeSideBarStatus(!this.props.isSideBarOpened);
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.sideBarButton} onClick={this.toggleSidebarNavigation}>
        &#9776; Menu
      </Paper>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SideBarButton));