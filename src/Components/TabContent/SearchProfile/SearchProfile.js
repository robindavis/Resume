import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import LoginErrorMessage from '../../LoginErrorMessage/LoginErrorMessage';
import UserAuthenticateDialog from '../../UserAuthenticateDialog/UserAuthenticateDialog';
import { styles } from './SearchProfileStyle';

class SearchProfile extends Component {
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
      <Grid container className={classes.searchProfile}>
        {(this.props.isUserLoggedIn) ?
          <>
				  SearchProfile
          </>
          :
          <>
          <LoginErrorMessage tabName="Search Profiles" handleLoginDialogOpenClose={this.handleLoginDialogOpenClose}/>
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

export default connect(mapStateToProps)(withStyles(styles)(SearchProfile));