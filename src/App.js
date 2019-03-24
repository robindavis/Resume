import React, { Component } from 'react';

import RootHeaderView from './Components/Header/RootHeaderView/RootHeaderView';
import RootTabContentView from './Components/TabContent/RootTabContentView/RootTabContentView';
import RootFooterView from './Components/Footer/RootFooterView/RootFooterView';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="resumeContainer">
        <RootHeaderView />
        <RootTabContentView />
        <RootFooterView />
      </div>
    );
  }
}

export default App;
