import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './HomeStyle';

class Home extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.homeContainer}>
				Home
			</Paper>
			);
	}
}

export default withStyles(styles)(Home);