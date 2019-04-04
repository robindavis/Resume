import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './HeaderNavigationBarStyle';
import TabButton from '../../../Utilities/DOM/TabButton/TabButton';
import * as RootAction from '../../../GlobalState/Actions/RootAction';

class HeaderNavigationBar extends Component {
  onSelectedContentChange = (selectedTabName) => {
    this.props.changeSelectedTab(selectedTabName);
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
        basisWidth={`${(100/tabNames.length).toFixed(3)}%`}
        fontSize="2vmin"
      />
      ));
    return (
      <Paper className={classes.headerNavigationBar}>
        {tabButtonArray}
      </Paper>
      );
  }
}

const mapStateToProps = (state, props) => {
  return {
    selectedTab: state.selectedTab,
    isDesktop: state.isDesktop
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedTab: newTabName => dispatch(RootAction.changeSelectedTab(newTabName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderNavigationBar));