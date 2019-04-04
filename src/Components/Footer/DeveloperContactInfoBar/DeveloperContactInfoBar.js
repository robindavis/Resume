import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './DeveloperContactInfoBarStyle';
import TextDisplay from '../../../Utilities/DOM/TextDisplay/TextDisplay';
import { getElapsedYearCount } from '../../../Utilities/Time/ElapsedTimeCount/ElapsedTimeCount';

class DeveloperContactInfoBar extends Component {
  render() {
    const { classes } = this.props;
    const developerInformationText =[`Robin Davis (Exp.: ${getElapsedYearCount('7 Nov 2017')} yrs)`,'robin.dvs007@gmail.com'];
    const developerInformationArray = developerInformationText.map((text,index) => 
      (<TextDisplay 
        key={index}
        text={text}
        basisWidth={`${(100/developerInformationText.length).toFixed(3)}%`}
      />
      ));
    return (
      <Paper className={classes.developerContactInfoBar} 
        style={{
          flexDirection:this.props.direction||'column',
          flexBasis: this.props.basisWidth||'40%'
              }}
      >
        {developerInformationArray}
      </Paper>
      );
  }
}

export default withStyles(styles)(DeveloperContactInfoBar);