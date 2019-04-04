import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SidebarNavigationListStyle';
import UserInfoBar from '../../Footer/UserInfoBar/UserInfoBar';
import * as RootAction from '../../../GlobalState/Actions/RootAction';
import SiteIcon from '../../Header/SiteIcon/SiteIcon';
import TabButton from '../../../Utilities/DOM/TabButton/TabButton';

class SidebarNavigationList extends Component {
  onSelectedContentChange = (selectedTabName) => {
    this.props.changeSelectedTab(selectedTabName);
    this.props.changeSideBarStatus(false);
  };

  render() {
    const { classes } = this.props;
    let tabNames=['Home','SignIn','Create Profile','View Profile','Search Profile','Profile Settings'];
    let tabButtonArray = tabNames.map((name,index) => (
      <TabButton 
        key={index}
        name={name} 
        tabChange={this.onSelectedContentChange} 
        selected={name===this.props.selectedTab} 
        basisWidth={`5%`}
        fontSize="2.8vmin"
      />
      ));
    return (
      <div className={classes.sidebarNavigationList}>
      <div className={classes.upperNavigationElements}>
      <SiteIcon basisWidth="15%"/>
      {tabButtonArray}
      </div>
      <div className={classes.lowerNavigationElements}>
      <UserInfoBar basisWidth="100%" backgroundColor="inherit"/>
      </div>
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
    changeSelectedTab: newTabName => dispatch(RootAction.changeSelectedTab(newTabName)),
    changeSideBarStatus: isSideBarOpened => dispatch(RootAction.changeSideBarStatus(isSideBarOpened))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SidebarNavigationList));