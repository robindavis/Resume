import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { fireAuth } from '../../Firebase/FirebaseConfig';
import { styles } from './LoginFormStyle';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    };
  }

  login= event => {
    event.preventDefault();
    fireAuth.signInWithEmailAndPassword(this.state.email,this.state.pass).then(user=> {
      // Do something once user is logged in
      this.props.handleLoginDialogOpenClose("success",user.user.uid);
    }).catch(error=> {
      console.log(error);
    });
  }

  handleFormInput = event => {
    this.setState({[event.target.id]: event.target.value});
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column" className={classes.loginFormContainer}>
        <form>
          <Grid container direction="column">
            <TextField
              id="email"
              label="Email"
              className={classes.emailIdContainer}
              margin="normal"
              variant="outlined"
              onChange={this.handleFormInput}
            />
            <TextField
              id="pass"
              label="Password"
              className={classes.passContainer}
              margin="normal"
              variant="outlined"
              onChange={this.handleFormInput}
              type="password"
            />
            <Button type="submit" className={classes.emailLoginbutton} onClick={this.login}>
              Log In
            </Button>
          </Grid>
        </form>
        <Button className={classes.googleLoginButton}>
          Google
        </Button>
      </Grid>
      );
  }
}

export default withStyles(styles)(LoginForm);