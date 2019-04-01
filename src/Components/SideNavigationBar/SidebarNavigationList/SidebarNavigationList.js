import React, {Component} from 'react';
import { connect } from 'react-redux';

import UserInfoBar from '../../Footer/UserInfoBar/UserInfoBar';
import * as RootAction from '../../../GlobalState/Actions/RootAction';
import SiteIcon from '../../Header/SiteIcon/SiteIcon';
import TabButton from '../../../Utilities/DOM/TabButton/TabButton';
import './SidebarNavigationList.css';

class SidebarNavigationList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelectedContentChange = (event) => {
    this.props.changeSelectedTab(event.target.name);
    this.props.changeSideBarStatus(false);
  };

  render() {
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
      <div className='sidebarNavigationList'>
      <div className="upperNavigationElements">
      <SiteIcon basisWidth="15%"/>
      {tabButtonArray}
      </div>
      <div className="lowerNavigationElements">
      <UserInfoBar basisWidth="100%"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNavigationList);