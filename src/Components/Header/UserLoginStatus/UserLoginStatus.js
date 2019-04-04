import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './UserLoginStatusStyle';
import TextDisplay from '../../../Utilities/DOM/TextDisplay/TextDisplay';
import LinkDisplay from '../../../Utilities/DOM/LinkDisplay/LinkDisplay';

class UserLoginStatus extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.userLoginStatus}>
        <TextDisplay text="Hi, Guest" basisWidth="50%"/>
        <LinkDisplay text="Log In" href="\\" basisWidth="50%" />
      </Paper>
      );
  }
}

export default withStyles(styles)(UserLoginStatus);