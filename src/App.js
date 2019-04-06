import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
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
      <Grid
        container
        direction="column"
        className={classes.resumeContainer}
        >
        <RootHeaderView />
        <RootTabContentView />
        <RootFooterView />
        <RootSideNavigationBar />
      </Grid>
    );
  }
}

export default withStyles(styles)(App);