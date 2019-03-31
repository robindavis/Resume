import React, {Component} from 'react';
import { connect } from 'react-redux';

import UserInfoBar from '../UserInfoBar/UserInfoBar';
import DeveloperContactInfoBar from '../DeveloperContactInfoBar/DeveloperContactInfoBar';
import GithubLogoDisplay from '../GithubLogoDisplay/GithubLogoDisplay';
import './RootFooterView.css';

class RootFooterView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='rootFooterView' style={{flexBasis:this.props.isDesktop?'10%':'5%'}}>
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
			</div>
			);
	}
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop
  };
};

export default connect(mapStateToProps)(RootFooterView);