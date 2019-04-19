import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';

import UserAuthenticateDialog from '../../UserAuthenticateDialog/UserAuthenticateDialog';
import Fire from '../../../Firebase/FirebaseConfig';
import UserLoginMenu from '../UserLoginMenu/UserLoginMenu';
import * as RootAction from '../../../GlobalState/Actions/RootAction';
import { styles } from './HeaderTitleViewStyle';

class HeaderTitleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      loginDialogOpen: false
    };
  }

  handleUserLoginMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleLoginDialogOpenClose = () => {
    this.setState((state)=> ({ loginDialogOpen: !state.loginDialogOpen }));
  };

  handleUserLoginMenuClose = (userClickEvent) => {
    this.setState({ anchorEl: null });
    if(userClickEvent==="signOut") {
      Fire.auth().signOut();
    } else if(userClickEvent==="logIn") {
      this.setState({loginDialogOpen: true});
    }
  };

  toggleSidebarNavigation = () => {
    this.props.changeSideBarStatus(!this.props.isSideBarOpened);
  };

  render() {
    const { classes } = this.props;
    return (
      <>
      <AppBar
        position="static"
        className={classes.titleBarContainer}
        style={{flexBasis:(this.props.isDesktop)?'40%':'100%'}}
      >
        <Toolbar
          className={classes.titleToolBarContainer}
        >
          {!this.props.isDesktop &&
          <IconButton 
            className={classes.titleMenuButtonContainer}
            onClick={this.toggleSidebarNavigation}
          >
            <Menu />
          </IconButton>}
          <div
            className={classes.titleBar}
          >
            Resume Builder
          </div>
          <IconButton
            onClick={this.handleUserLoginMenuClick}
          >
            <AccountCircle />
          </IconButton>
          <UserLoginMenu
            anchorEl={this.state.anchorEl}
            handleClose = {this.handleUserLoginMenuClose}
          />
        </Toolbar>
      </AppBar>
      {this.state.loginDialogOpen && <UserAuthenticateDialog handleLoginDialogOpenClose={this.handleLoginDialogOpenClose} open={this.state.loginDialogOpen}/>}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop,
    isSideBarOpened: state.isSideBarOpened
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSideBarStatus: isSideBarOpened => dispatch(RootAction.changeSideBarStatus(isSideBarOpened))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(HeaderTitleView));