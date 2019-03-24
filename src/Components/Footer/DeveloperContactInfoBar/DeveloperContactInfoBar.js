import React, {Component} from 'react';

import TextDisplay from '../../../Utilities/DOM/TextDisplay/TextDisplay';
import { getElapsedYearCount } from '../../../Utilities/Time/ElapsedTimeCount/ElapsedTimeCount';
import './DeveloperContactInfoBar.css';

class DeveloperContactInfoBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const developerInformationText =[`Robin Davis (Exp.: ${getElapsedYearCount('7 Nov 2017')} yrs)`,'robin.dvs007@gmail.com'];
    const developerInformationArray = developerInformationText.map((text,index) => 
      (<TextDisplay 
        key={index}
        text={text}
        basisWidth={`${(100/developerInformationText.length).toFixed(3)}%`}
      />
      ));
    return (
      <div className="developerContactInfoBar">
        {developerInformationArray}
      </div>
      );
  }
}

export default DeveloperContactInfoBar;