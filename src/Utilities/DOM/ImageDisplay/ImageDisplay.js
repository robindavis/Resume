import React, {Component} from 'react';

import './ImageDisplay.css';

class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const imageObject =(
      <img 
        className="imageDisplay" 
        src={this.props.src}
        alt={this.props.text||'Sample Text'} 
        style={{height:this.props.height||'100%',
                width:this.props.width||'100%'
              }}
      />
      );
    const formatedImageObject = (this.props.href) ? 
      (<a target="_blank" href={this.props.href} rel="noopener noreferrer">{imageObject}</a>) : 
      imageObject;
    return (
      <div 
        className="imageContainer" 
        style={{flexBasis:this.props.basisWidth,
                justifyContent:this.props.horizontalPosition||'center',
                alignItems:this.props.verticalPosition||'center'
              }}
      >
        {formatedImageObject}
      </div>
      );
  }
}

export default ImageDisplay;