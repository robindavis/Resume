import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './AppStyle';
import RootHeaderView from './Components/Header/RootHeaderView/RootHeaderView';
import RootTabContentView from './Components/TabContent/RootTabContentView/RootTabContentView';
import RootFooterView from './Components/Footer/RootFooterView/RootFooterView';
import RootSideNavigationBar from './Components/SideNavigationBar/RootSideNavigationBar/RootSideNavigationBar';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
      <Paper className={classes.resumeContainer}>
        <RootHeaderView />
        <RootTabContentView />
        <RootFooterView />
      </Paper>
      {this.props.isSideBarOpened && <RootSideNavigationBar />}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isSideBarOpened: state.isSideBarOpened
  };
};

export default connect(mapStateToProps)(withStyles(styles)(App));