import React, {Component} from 'react';

import './SiteIcon.css';

class SiteIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='siteIcon'>
        <div className="wrap">
          <div className="cube">
            <div className="front">&clubs;</div>
            <div className="back">&clubs;</div>
            <div className="top">&clubs;</div>
            <div className="bottom">&clubs;</div>
            <div className="left">&clubs;</div>
            <div className="right">&clubs;</div>
          </div>
        </div>
      </div>
      );
  }
}

export default SiteIcon;