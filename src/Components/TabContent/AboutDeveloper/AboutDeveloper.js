import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import RootFooterView from '../../Footer/RootFooterView/RootFooterView';
import { styles } from './AboutDeveloperStyle';

class AboutDeveloper extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.AboutDeveloper}>
			<RootFooterView />
			</Paper>
			);
	}
}

export default withStyles(styles)(AboutDeveloper);