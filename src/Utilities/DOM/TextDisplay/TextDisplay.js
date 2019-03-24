import React, {Component} from 'react';

import './TextDisplay.css';

class TextDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div 
        className="textDisplay" 
        style={{flexBasis:this.props.basisWidth,
                justifyContent:this.props.horizontalPosition||'center',
                alignItems:this.props.verticalPosition||'center'
              }}
      >
        {this.props.text}
      </div>
      );
  }
}

export default TextDisplay;