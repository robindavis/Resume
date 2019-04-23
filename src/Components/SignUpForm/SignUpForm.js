import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { fireAuth } from '../../Firebase/FirebaseConfig';
import { styles } from './SignUpFormStyle';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    };
  }

  signUp = event => {
    event.preventDefault();
    fireAuth.createUserWithEmailAndPassword(this.state.email,this.state.pass).then(user=> {
      // Do something once user is logged in
      this.props.handleLoginDialogOpenClose();
    }).catch(error=> {
      console.log(error);
      console.log(this.state.email);
      console.log(this.state.pass);
    });
  }

  handleFormInput = event => {
    this.setState({[event.target.id]: event.target.value});
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column" className={classes.signUpFormContainer}>
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
            />
            <Button type="submit" className={classes.button} onClick={this.signUp}>
              Sign Up
            </Button>
          </Grid>
        </form>
      </Grid>
      );
  }
}

export default withStyles(styles)(SignUpForm);