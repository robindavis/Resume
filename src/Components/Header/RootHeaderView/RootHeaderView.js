import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
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
			<Paper className={classes.rootHeaderView} style={{flexBasis:this.props.isDesktop?'20%':'10%'}}>
				<HeaderTitleBar />
				{this.props.isDesktop && <HeaderNavigationBar />}
			</Paper>
			);
	}	
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop
  };
};

export default connect(mapStateToProps)(withStyles(styles)(RootHeaderView));