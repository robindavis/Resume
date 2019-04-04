import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SearchProfileStyle';

class SearchProfile extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.searchProfile}>
				SearchProfile
			</Paper>
			);
	}
}

export default withStyles(styles)(SearchProfile);