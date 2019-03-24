import React, {Component} from 'react';

import UserInfoBar from '../UserInfoBar/UserInfoBar';
import DeveloperContactInfoBar from '../DeveloperContactInfoBar/DeveloperContactInfoBar';
import ImageDisplay from '../../../Utilities/DOM/ImageDisplay/ImageDisplay';
import githubLogo from '../../../Images/GithubLogo/Logo.png';
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
				<ImageDisplay 
					src={githubLogo}
					basisWidth="20%"
					height="50px" 
					width="50px" 
					href="https://github.com/robindavis/Resume"
				/>
				<DeveloperContactInfoBar />
			</div>
			);
	}
}

export default RootFooterView;