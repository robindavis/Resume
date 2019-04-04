import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './ProfileSettingsStyle';

class ProfileSettings extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.profileSettings}>
				ProfileSettings
			</Paper>
			);
	}
}

export default withStyles(styles)(ProfileSettings);