import React, {Component} from 'react';

import './SiteIcon.css';

class SiteIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='siteIcon' style={{flexBasis:this.props.basisWidth||'20%'}}>
        <div className="wrap">
          <div className="cube">
            <div className="front">&clubs;</div>
            <div className="back">&#9728;</div>
            <div className="top"> &#9763;</div>
            <div className="bottom">&#9775;</div>
            <div className="left">&#9819;</div>
            <div className="right">&#9836;</div>
          </div>
        </div>
      </div>
      );
  }
}

export default SiteIcon;