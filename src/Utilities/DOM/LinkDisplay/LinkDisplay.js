import React, {Component} from 'react';

import './LinkDisplay.css';

class LinkDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a 
        className="linkDisplay" 
        style={{flexBasis:this.props.basisWidth}}
        href={this.props.href}
      >
        {this.props.text}
      </a>
      );
  }
}

export default LinkDisplay;