import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './CreateProfileStyle';

class CreateProfile extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.createProfile}>
				CreateProfile
			</Paper>
			);
	}
}

export default withStyles(styles)(CreateProfile);