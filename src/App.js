import React, { Component } from 'react';
import { connect } from 'react-redux';

import RootHeaderView from './Components/Header/RootHeaderView/RootHeaderView';
import RootTabContentView from './Components/TabContent/RootTabContentView/RootTabContentView';
import RootFooterView from './Components/Footer/RootFooterView/RootFooterView';
import RootSideNavigationBar from './Components/SideNavigationBar/RootSideNavigationBar/RootSideNavigationBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <div className="resumeContainer">
        <RootHeaderView />
        <RootTabContentView />
        <RootFooterView />
      </div>
      {this.props.isSideBarOpened && <RootSideNavigationBar />}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isSideBarOpened: state.isSideBarOpened
  };
};

export default connect(mapStateToProps)(App);