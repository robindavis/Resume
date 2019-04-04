import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './RootFooterViewStyle';
import UserInfoBar from '../UserInfoBar/UserInfoBar';
import DeveloperContactInfoBar from '../DeveloperContactInfoBar/DeveloperContactInfoBar';
import GithubLogoDisplay from '../GithubLogoDisplay/GithubLogoDisplay';

class RootFooterView extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.rootFooterView} style={{flexBasis:this.props.isDesktop?'10%':'5%'}}>
				{this.props.isDesktop ?
				<>
				<UserInfoBar />
				<GithubLogoDisplay />
				<DeveloperContactInfoBar />
				</>:
				<>
				<DeveloperContactInfoBar
					direction='row'
					basisWidth='100%'
				 />
				</>}
			</Paper>
			);
	}
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop
  };
};

export default connect(mapStateToProps)(withStyles(styles)(RootFooterView));