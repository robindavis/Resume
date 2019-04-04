import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './RootSideNavigationBarStyle';
import SidebarCloseButton from '../SidebarCloseButton/SidebarCloseButton';
import SidebarNavigationList from '../SidebarNavigationList/SidebarNavigationList';

class RootSideNavigationBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.rootSideNavigationBar}>
        <SidebarCloseButton />
        <SidebarNavigationList />
      </Paper>
      );
  }
}

export default withStyles(styles)(RootSideNavigationBar);