import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import LoginErrorMessage from '../../LoginErrorMessage/LoginErrorMessage';
import UserAuthenticateDialog from '../../UserAuthenticateDialog/UserAuthenticateDialog';
import { styles } from './ViewProfileStyle';

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDialogOpen: true
    };
  }

  handleLoginDialogOpenClose = () => {
    this.setState((state)=> ({ loginDialogOpen: !state.loginDialogOpen }));
  };

	render() {
		const { classes } = this.props;
		return (
      <Grid container className={classes.viewProfile}>
        {(this.props.isUserLoggedIn) ?
          <>
          ViewProfile
          </>
          :
          <>
          <LoginErrorMessage tabName="View Profiles" handleLoginDialogOpenClose={this.handleLoginDialogOpenClose}/>
          <UserAuthenticateDialog handleLoginDialogOpenClose={this.handleLoginDialogOpenClose} open={this.state.loginDialogOpen}/>
          </>
        }
			</Grid>
			);
	}
}

const mapStateToProps = (state, props) => {
  return {
    isUserLoggedIn: state.isUserLoggedIn
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ViewProfile));