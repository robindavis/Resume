import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import * as RootAction from '../../../GlobalState/Actions/RootAction';
import { styles } from './HeaderTabNavigationViewStyle';

class HeaderTabNavigationView extends Component {
  constructor(props) {
    super(props);
    this.tabNames=['Home','SignIn','Create Profile','View Profile','Search Profile','Profile Settings'];
  }

  handleChange = (event, value) => {
    this.props.changeSelectedTab(this.tabNames[value]);
  };

  render() {
    const { classes } = this.props;
    const selectedTabIndex = this.tabNames.findIndex(val => val===this.props.selectedTab);
    return (
      <div className={classes.navBarContainer}>
      <AppBar 
        position="static"
        className={classes.navBarWrapper}
      >
        <Tabs
          value={selectedTabIndex}
          onChange={this.handleChange}
          classes={{indicator:classes.indicator}}
          variant="fullWidth"
          className={classes.tabContainer}
        >
        {
          this.tabNames.map((text,index) =>
            <Tab
              label={text}
              key={index}
              className={selectedTabIndex===index?classes.selectedTabBarItem:classes.normalTabBarItem}
            />
          )
        }
        </Tabs>
      </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    selectedTab: state.selectedTab
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedTab: isSideBarOpened => dispatch(RootAction.changeSelectedTab(isSideBarOpened))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(HeaderTabNavigationView));