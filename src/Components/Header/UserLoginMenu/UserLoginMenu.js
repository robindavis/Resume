import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { styles } from './UserLoginMenuStyle';

class UserLoginMenu extends Component {

  render() {
    const { classes } = this.props;
    const open = Boolean(this.props.anchorEl);
    return (
      <Menu
        anchorEl={this.props.anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open = {open}
        onClose = { this.props.handleClose }
        className={classes.userLoginMenuContainer}
      >
        <MenuItem onClick={this.props.handleClose}>Hi Guest</MenuItem>
        <MenuItem onClick={this.props.handleClose}>Sign In</MenuItem>
      </Menu>
    );
  }
}

export default withStyles(styles)(UserLoginMenu);