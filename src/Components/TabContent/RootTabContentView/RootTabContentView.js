import React, {Component} from 'react';
import { connect } from 'react-redux';

import CreateProfile from '../CreateProfile/CreateProfile';
import Home from '../Home/Home';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import SearchProfile from '../SearchProfile/SearchProfile';
import SignIn from '../SignIn/SignIn';
import ViewProfile from '../ViewProfile/ViewProfile';

import './RootTabContentView.css';

class RootTabContentView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
      <div className="rootTabContentView" style={{flexBasis:this.props.isDesktop?'70%':'85%'}}>
        {tabView}
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

export default connect(mapStateToProps)(RootTabContentView);