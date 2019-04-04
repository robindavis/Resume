import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './UserInfoBarStyle';
import TextDisplay from '../../../Utilities/DOM/TextDisplay/TextDisplay';
import { getCurrentDate, getCurrentTime} from '../../../Utilities/Time/CurrentDateTime/CurrentDateTime';

class UserInfoBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.userInfoBar} style={{flexBasis:this.props.basisWidth||'40%',backgroundColor:this.props.backgroundColor}}>
        <TextDisplay 
          text={`Last Login: ${getCurrentDate()} ${getCurrentTime()}`} 
          basisWidth="50%"
          horizontalPosition="center"
          verticalPosition="center"
          fontSize="2.2vmin"
        />
        <TextDisplay 
          text={`Total Profiles: 0`} 
          basisWidth="50%"
          horizontalPosition="center"
          verticalPosition="center"
        />
      </Paper>
      );
  }
}

export default withStyles(styles)(UserInfoBar);