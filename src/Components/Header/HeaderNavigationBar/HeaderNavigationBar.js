import React, {Component} from 'react';
import { connect } from 'react-redux';

import TabButton from '../../../Utilities/DOM/TabButton/TabButton';
import * as RootAction from '../../../GlobalState/Actions/RootAction';
import './HeaderNavigationBar.css';


class HeaderNavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelectedContentChange = (event) => {
    this.props.changeSelectedTab(event.target.name);
  };

  render() {
    let tabNames=['Home','SignIn','Create Profile','View Profile','Search Profile','Profile Settings'];
    let tabButtonArray = tabNames.map((name,index) => (
      <TabButton 
        key={index}
        name={name} 
        tabChange={this.onSelectedContentChange} 
        selected={name===this.props.selectedTab} 
        basisWidth={`${(100/tabNames.length).toFixed(3)}%`}
        fontSize="2.3vmin"
      />
      ));
    return (
      <div className="headerNavigationBar">
        {tabButtonArray}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavigationBar);