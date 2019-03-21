import React, {Component} from 'react';

import TabButton from '../../../Utilities/DOM/TabButton/TabButton';

import './HeaderNavigationBar.css';

class HeaderNavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContent: 0
    };
  }

  onSelectedContentChange = (event) => {
    this.setState({
      selectedContent: event.target.id
    });
  };

  render() {
    let tabNames=['Home','SignIn','Create Profile','View Profile','Search Profile','Profile Settings'];
    let tabButtonArray = tabNames.map((name,index) => <TabButton tabChange={this.onSelectedContentChange} id={index} key={index} selected={this.state.selectedContent.toString()===index.toString()} name={name} basisWidth={`${(100/tabNames.length).toFixed(3)}%`}/>);
    return (
      <div className="headerNavigationBar">
        {tabButtonArray}
      </div>
      );
  }
}

export default HeaderNavigationBar;