import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './RootHeaderViewStyle';
import HeaderNavigationBar from '../HeaderNavigationBar/HeaderNavigationBar';
import HeaderTitleBar from '../HeaderTitleBar/HeaderTitleBar';

class RootHeaderView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid
				item
				container
				direction="column"
				className={classes.rootHeaderView}
				style={
					{flexBasis:this.props.isDesktop?'20%':'10%'}
				}>
				<HeaderTitleBar />
				{this.props.isDesktop && <HeaderNavigationBar />}
			</Grid>
		);
	}
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop
  };
};

export default connect(mapStateToProps)(withStyles(styles)(RootHeaderView));