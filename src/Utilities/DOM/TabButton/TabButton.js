import React, {Component} from 'react';

import './TabButton.css';

class TabButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button id={this.props.id} className={this.props.selected?'tabButton selected':'tabButton normal'} style={{flexBasis:this.props.basisWidth}} onClick={this.props.tabChange}>
        {this.props.name}
      </button>
      );
  }
}

export default TabButton;