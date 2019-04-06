import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './RootFooterViewStyle';
import UserInfoBar from '../UserInfoBar/UserInfoBar';
import DeveloperContactInfoBar from '../DeveloperContactInfoBar/DeveloperContactInfoBar';
import GithubLogoDisplay from '../GithubLogoDisplay/GithubLogoDisplay';

class RootFooterView extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid
				container
				item
				className={classes.rootFooterView}
				style={
					{flexBasis:this.props.isDesktop?'10%':'5%'}
				}>
				{this.props.isDesktop ?
					<>
					<UserInfoBar />
					<GithubLogoDisplay />
					<DeveloperContactInfoBar />
					</>
					:
					<>
					<DeveloperContactInfoBar
						direction='row'
						basisWidth='100%'
					 />
					</>
				}
			</Grid>
			);
	}
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop
  };
};

export default connect(mapStateToProps)(withStyles(styles)(RootFooterView));