import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './GithubLogoDisplayStyle';
import ImageDisplay from '../../../Utilities/DOM/ImageDisplay/ImageDisplay';
import githubLogo from '../../../Images/GithubLogo/Logo.png';

class GithubLogoDisplay extends Component {
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

export default withStyles(styles)(GithubLogoDisplay);