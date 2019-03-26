import React, {Component} from 'react';

import './TabButton.css';

class TabButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button 
        className={this.props.selected?'tabButton selected':'tabButton normal'} 
        style={{flexBasis:this.props.basisWidth,
                fontSize:this.props.fontSize||'2.5vmin'
              }} 
        onClick={this.props.tabChange}
        name={this.props.name}
      >
        {this.props.name}
      </button>
      );
  }
}

export default TabButton;