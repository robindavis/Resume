import React, {Component} from 'react';
import { connect } from 'react-redux';

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
			<div className="rootHeaderView" style={{flexBasis:this.props.isDesktop?'20%':'10%'}}>
				<HeaderTitleBar />
				{this.props.isDesktop && <HeaderNavigationBar />}
			</div>
			);
	}	
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop
  };
};

export default connect(mapStateToProps)(RootHeaderView);