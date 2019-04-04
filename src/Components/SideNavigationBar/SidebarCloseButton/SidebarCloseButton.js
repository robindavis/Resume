import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SidebarCloseButtonStyle';
import * as RootAction from '../../../GlobalState/Actions/RootAction';

class SidebarCloseButton extends Component {
closeSideBar = () => {
  this.props.changeSideBarStatus(false);
};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sidebarCloseButton}>
        <div className={classes.crossIconSpace}></div>
        <div className={classes.crossIconContainer}>
        <div className={classes.crossIcon} onClick={this.closeSideBar}>
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

export default connect(null,mapDispatchToProps)(withStyles(styles)(SidebarCloseButton));