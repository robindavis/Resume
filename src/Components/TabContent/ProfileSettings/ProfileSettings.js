import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import LoginErrorMessage from '../../LoginErrorMessage/LoginErrorMessage';
import UserAuthenticateDialog from '../../UserAuthenticateDialog/UserAuthenticateDialog';
import { styles } from './ProfileSettingsStyle';

class ProfileSettings extends Component {
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
      <Grid container className={classes.profileSettings}>
        {(this.props.isUserLoggedIn) ?
          <>
          ProfileSettings
          </>
          :
          <>
          <LoginErrorMessage tabName="edit Profile Settings" handleLoginDialogOpenClose={this.handleLoginDialogOpenClose}/>
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

export default connect(mapStateToProps)(withStyles(styles)(ProfileSettings));