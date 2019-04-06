import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './RootTabContentViewStyle';
import CreateProfile from '../CreateProfile/CreateProfile';
import Home from '../Home/Home';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import SearchProfile from '../SearchProfile/SearchProfile';
import SignIn from '../SignIn/SignIn';
import ViewProfile from '../ViewProfile/ViewProfile';

class RootTabContentView extends Component {
  render() {
    const { classes } = this.props;
    let tabView = null;
    switch(this.props.selectedTab) {
      case 'Home':
        {
          tabView = <Home />;
          break;
        }
      case 'SignIn':
        {
          tabView = <SignIn />;
          break;
        }
      case 'Create Profile':
        {
          tabView = <CreateProfile />;
          break;
        }
      case 'View Profile':
        {
          tabView = <ViewProfile />;
          break;
        }
      case 'Search Profile':
        {
          tabView = <SearchProfile />;
          break;
        }
      case 'Profile Settings':
        {
          tabView = <ProfileSettings />;
          break;
        }
      default:
        tabView = null;
    }
    return (
      <Grid
        container
        item
        className={classes.rootTabContentView}
        style={
          {flexBasis:this.props.isDesktop?'70%':'85%'}
        }>
        {tabView}
      </Grid>
      );
  }
}

const mapStateToProps = (state, props) => {
  return {
    selectedTab: state.selectedTab,
    isDesktop: state.isDesktop
  };
};

export default connect(mapStateToProps)(withStyles(styles)(RootTabContentView));