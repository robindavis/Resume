import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SignInStyle';

class SignIn extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.signIn}>
				SignIn
			</Paper>
			);
	}
}

export default withStyles(styles)(SignIn);