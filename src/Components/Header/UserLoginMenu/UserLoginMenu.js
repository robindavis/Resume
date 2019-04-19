import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

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
      {(this.props.isUserLoggedIn) ?
        <MenuItem onClick={e=>this.props.handleClose('signOut')}>Sign Out</MenuItem>
        :
        <MenuItem onClick={e=>this.props.handleClose('logIn')}>Log In</MenuItem>
      }
      </Menu>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isUserLoggedIn: state.isUserLoggedIn
  };
};

export default connect(mapStateToProps)(withStyles(styles)(UserLoginMenu));