import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Settings from '@material-ui/icons/Settings';
import Home from '@material-ui/icons/Home';
import Edit from '@material-ui/icons/Edit';
import Portrait from '@material-ui/icons/Portrait';
import Search from '@material-ui/icons/Search';
import AirlineSeatReclineNormal from '@material-ui/icons/AirlineSeatReclineNormal';

import { styles } from './SidebarNavigationListStyle';
import * as RootAction from '../../../GlobalState/Actions/RootAction';

class SidebarNavigationList extends Component {

  onSelectedContentChange = (selectedTabName) => {
    this.props.changeSelectedTab(selectedTabName);
    this.props.changeSideBarStatus(false);
  };

  render() {
    const { classes } = this.props;
    const tabNames=['Home','Create Profile','View Profile','Search Profile','Profile Settings','About Developer'];
    const tabIcons=[<Home />,<Edit />,<Portrait />,<Search />,<Settings />,<AirlineSeatReclineNormal />];
    const fullList = tabNames.map((text, index) => (
      <Fragment key={text}>
      <ListItem button 
        onClick={event => this.onSelectedContentChange(text)}
        onKeyDown={event => this.onSelectedContentChange(text)}
        className={this.props.selectedTab===text?classes.selectedItem:''}
      >
        <ListItemIcon>{tabIcons[index]}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
      <Divider />
      </Fragment>
    ));

    return (
    <div className={classes.listContainer}>
      <List className={classes.list}> {fullList} </List>
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