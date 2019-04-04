import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './ViewProfileStyle';

class ViewProfile extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.viewProfile}>
				ViewProfile
			</Paper>
			);
	}
}

export default withStyles(styles)(ViewProfile);