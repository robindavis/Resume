import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Warning from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';

import { styles } from './LoginErrorMessageStyle';

class LoginErrorMessage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container item justify="center" alignItems="center" direction="column">
        <Grid container direction="column" alignItems="center" className={classes.loginMessageContainer}>
        <Warning  className={classes.iconContainer}/>
        Please Login to {this.props.tabName}
        </Grid>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.props.handleLoginDialogOpenClose}>
          Login
        </Button>
      </Grid>
      );
  }
}

export default withStyles(styles)(LoginErrorMessage);