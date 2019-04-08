import React, {Component} from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './RootHeaderViewStyle';
import HeaderTitleView from '../HeaderTitleView/HeaderTitleView';
import HeaderTabNavigationView from '../HeaderTabNavigationView/HeaderTabNavigationView';
import { isCurrentDesktopView } from '../../../Utilities/DOM/IsCurrentDesktopView/IsCurrentDesktopView';
import * as RootAction from '../../../GlobalState/Actions/RootAction';

class RootHeaderView extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid
				item
				container
				direction="column"
				className={classes.rootHeaderView}
				style={
					{flex:this.props.isDesktop?'0 0 100px':'0 0 50px'}
				}>
				<HeaderTitleView />
				{this.props.isDesktop && <HeaderTabNavigationView />}
			</Grid>
		);
	}

	updateDesktopOrMobileView = () =>{
	  this.props.changeDesktopMobileView(isCurrentDesktopView());
	  if(this.props.isDesktop) {
	    this.props.changeSideBarStatus(false);
	  }
	}

	componentDidMount() {
	  window.addEventListener("resize", this.updateDesktopOrMobileView);
	}

	componentWillUnmount() {
	  window.removeEventListener("resize", this.updateDesktopOrMobileView);
	}
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDesktopMobileView: isDesktop => dispatch(RootAction.changeDesktopMobileView(isDesktop)),
    changeSideBarStatus: isSideBarOpened => dispatch(RootAction.changeSideBarStatus(isSideBarOpened))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(RootHeaderView));