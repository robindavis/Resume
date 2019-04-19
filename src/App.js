import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import * as RootAction from './GlobalState/Actions/RootAction';
import Fire from './Firebase/FirebaseConfig';
import { styles } from './AppStyle';
import RootHeaderView from './Components/Header/RootHeaderView/RootHeaderView';
import RootTabContentView from './Components/TabContent/RootTabContentView/RootTabContentView';
import RootSideNavigationBar from './Components/SideNavigationBar/RootSideNavigationBar/RootSideNavigationBar';

class App extends Component {
  authListener() {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.changeUserLogInStatus(true);
        this.props.updateUserInfo(user);
      } else {
        this.props.changeUserLogInStatus(false);
        this.props.updateUserInfo(null);
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        className={classes.resumeContainer}
        >
        <RootHeaderView />
        <RootTabContentView />
        <RootSideNavigationBar />
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserLogInStatus: isUserLoggedIn => dispatch(RootAction.changeUserLogInStatus(isUserLoggedIn)),
    updateUserInfo: userInfo => dispatch(RootAction.updateUserInfo(userInfo))
  };
};

export default connect(null,mapDispatchToProps)(withStyles(styles)(App));