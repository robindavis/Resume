import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './RootTabContentViewStyle';
import CreateProfile from '../CreateProfile/CreateProfile';
import Home from '../Home/Home';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import SearchProfile from '../SearchProfile/SearchProfile';
import AboutDeveloper from '../AboutDeveloper/AboutDeveloper';
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
      case 'About Developer':
        {
          tabView = <AboutDeveloper />;
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
          {flex:this.props.isDesktop?'1':'1'}
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