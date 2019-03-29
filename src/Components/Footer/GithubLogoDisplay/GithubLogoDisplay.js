import React, {Component} from 'react';

import ImageDisplay from '../../../Utilities/DOM/ImageDisplay/ImageDisplay';
import githubLogo from '../../../Images/GithubLogo/Logo.png';
import './GithubLogoDisplay.css';

class GithubLogoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <ImageDisplay 
          src={githubLogo}
          basisWidth="20%"
          height="7vmin" 
          width="7vmin" 
          href="https://github.com/robindavis/Resume"
        />
      );
  }
}

export default GithubLogoDisplay;