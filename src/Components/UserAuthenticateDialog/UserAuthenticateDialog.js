import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import { styles } from './UserAuthenticateDialogStyle';

class UserAuthenticateDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.UserAuthenticateDialogContainer}>
        <Dialog
                 open={this.props.open}
                 onClose={this.props.handleLoginDialogOpenClose}
                 aria-labelledby="form-dialog-title"
               >
                 <DialogContent className={classes.dialogContentContainer}>
                   <AppBar position="static">
                     <Tabs value={this.state.value} onChange={this.handleChange} classes={{indicator:classes.indicator}}>
                       <Tab label="Login" className={classes.tabContainer}/>
                       <Tab label="Sign Up" className={classes.tabContainer}/>
                     </Tabs>
                   </AppBar>
                   {this.state.value === 0 && <LoginForm handleLoginDialogOpenClose={this.props.handleLoginDialogOpenClose}/>}
                   {this.state.value === 1 && <SignUpForm handleLoginDialogOpenClose={this.props.handleLoginDialogOpenClose}/>}
                 </DialogContent>
               </Dialog>
      </div>
      );
  }
}

export default withStyles(styles)(UserAuthenticateDialog);