import React, {Component} from 'react';

import HeaderNavigationBar from '../HeaderNavigationBar/HeaderNavigationBar';
import HeaderTitleBar from '../HeaderTitleBar/HeaderTitleBar';

import './RootHeaderView.css';

class RootHeaderView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="rootHeaderView">
				<HeaderTitleBar />
				<HeaderNavigationBar />
			</div>
			);
	}
}

export default RootHeaderView;