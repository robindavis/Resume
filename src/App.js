import React, { Component } from 'react';

import RootHeaderView from './Components/Header/RootHeaderView/RootHeaderView';
import RootContentView from './Components/Content/RootContentView/RootContentView';
import RootFooterView from './Components/Footer/RootFooterView/RootFooterView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="resumeContainer">
        <RootHeaderView />
        <RootContentView />
        <RootFooterView />
      </div>
    );
  }
}

export default App;
