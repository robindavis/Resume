import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '@material-ui/icons/Home';
import Edit from '@material-ui/icons/Edit';
import Portrait from '@material-ui/icons/Portrait';
import Search from '@material-ui/icons/Search';
import Settings from '@material-ui/icons/Settings';
import AirlineSeatReclineNormal from '@material-ui/icons/AirlineSeatReclineNormal';

import * as RootAction from '../../../GlobalState/Actions/RootAction';
import { styles } from './HeaderTabNavigationViewStyle';

class HeaderTabNavigationView extends Component {
  constructor(props) {
    super(props);
    this.tabNames=['Home','Create Profile','View Profile','Search Profile','Profile Settings','About Developer'];
  }

  handleChange = (event, value) => {
    this.props.changeSelectedTab(this.tabNames[value]);
  };

  render() {
    const { classes } = this.props;
    const tabIcons=[<Home className={classes.tabIcon}/>,<Edit className={classes.tabIcon}/>,<Portrait className={classes.tabIcon}/>,<Search className={classes.tabIcon}/>,<Settings className={classes.tabIcon}/>,<AirlineSeatReclineNormal className={classes.tabIcon}/>];
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
              icon={tabIcons[index]}
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