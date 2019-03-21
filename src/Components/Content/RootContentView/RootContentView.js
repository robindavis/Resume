import React, {Component} from 'react';

import CreateProfile from '../CreateProfile/CreateProfile';
import Home from '../Home/Home';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import SearchProfile from '../SearchProfile/SearchProfile';
import SignIn from '../SignIn/SignIn';
import ViewProfile from '../ViewProfile/ViewProfile';

import './RootContentView.css';

class RootContentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedView: 'home'
    };
  }

  render() {
    return (
      <div className="rootContentView">
        { this.state.selectedView==='home' && <Home /> }
        { this.state.selectedView==='signIn' && <SignIn /> }
        { this.state.selectedView==='createProfile' && <CreateProfile /> }
        { this.state.selectedView==='viewProfile' && <ViewProfile /> }
        { this.state.selectedView==='searchProfile' && <SearchProfile /> }
        { this.state.selectedView==='profileSettings' && <ProfileSettings /> }
      </div>
      );
  }
}

export default RootContentView;