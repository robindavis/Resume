import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './HeaderTitleBarStyle';
import SiteIcon from '../SiteIcon/SiteIcon';
import SideBarButton from '../SideBarButton/SideBarButton';
import UserLoginStatus from '../UserLoginStatus/UserLoginStatus';
import TextDisplay from '../../../Utilities/DOM/TextDisplay/TextDisplay';
import * as RootAction from '../../../GlobalState/Actions/RootAction';
import { isCurrentDesktopView } from '../../../Utilities/DOM/IsCurrentDesktopView/IsCurrentDesktopView';

class HeaderTitleBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.headerTitleBar} style={{flexBasis:this.props.isDesktop?'65%':'100%'}}>
        {this.props.isDesktop?<SiteIcon />:<SideBarButton />}
        <TextDisplay 
          text="Resume Builder" 
          basisWidth="60%"
          verticalPosition="top"
        />
        <UserLoginStatus />
      </Paper>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderTitleBar));