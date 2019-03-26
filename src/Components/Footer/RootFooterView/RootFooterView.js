import React, {Component} from 'react';

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
			<div className='rootFooterView'>
				<UserInfoBar />
				<GithubLogoDisplay />
				<DeveloperContactInfoBar />
			</div>
			);
	}
}

export default RootFooterView;