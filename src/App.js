import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import * as RootAction from './GlobalState/Actions/RootAction';
import { fireAuth, fireStore } from './Firebase/FirebaseConfig';
import { styles } from './AppStyle';
import RootHeaderView from './Components/Header/RootHeaderView/RootHeaderView';
import RootTabContentView from './Components/TabContent/RootTabContentView/RootTabContentView';
import RootSideNavigationBar from './Components/SideNavigationBar/RootSideNavigationBar/RootSideNavigationBar';

class App extends Component {
  authListener() {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.props.changeUserLogInStatus(true);
        this.props.updateUserInfo(user);

        // Creating Site's Initial Data
        var siteUserInfoDoc =fireStore.collection('SiteInfo').doc('Users');
        siteUserInfoDoc.get().then((docData)=>{
          if(!docData.exists) {
            siteUserInfoDoc.set({Count: 1,TotalResumes: 0}).then(()=>{}).catch(error=>console.log(error));
            this.props.updateSiteInfo({Count: 1,TotalResumes: 0});
          } else {
            this.props.updateSiteInfo(docData.data());
          }
        }).catch(error=>console.log(error));

        // // If new User adding UID
        // var siteUserInfoDoc =fireStore.collection('SiteInfo').doc('Users');
        // siteUserInfoDoc.get().then((docData)=>{
        //   if(!docData.exists) {
        //     siteUserInfoDoc.set({Count: 1,TotalResumes: 0}).then(()=>{}).catch(error=>console.log(error));
        //   }
        // }).catch(error=>console.log(error));

        // Create Initial User's Profile Settings if not else fetch into redux
        var commonProfileSettings =fireStore.collection('Users').doc(`${user.uid}`).collection('ProfileSettings').doc('Common');
        commonProfileSettings.get().then((docData)=>{
          if(!docData.exists) {
            commonProfileSettings.set({TotalProfilesCreated: 0}).then(()=>{}).catch(error=>console.log(error));
            this.props.updateUserProfileSettings({TotalProfilesCreated: 0});
          } else {
            this.props.updateUserProfileSettings(docData.data());
          }
        }).catch(error=>console.log(error));

      } else {
        this.props.changeUserLogInStatus(false);
        this.props.updateUserInfo(null);
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        className={classes.resumeContainer}
        >
        <RootHeaderView />
        <RootTabContentView />
        <RootSideNavigationBar />
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserLogInStatus: isUserLoggedIn => dispatch(RootAction.changeUserLogInStatus(isUserLoggedIn)),
    updateUserInfo: userInfo => dispatch(RootAction.updateUserInfo(userInfo)),
    updateUserProfileSettings: userProfileSettings => dispatch(RootAction.updateUserProfileSettings(userProfileSettings)),
    updateSiteInfo: siteInfoData => dispatch(RootAction.updateSiteInfo(siteInfoData))
  };
};

export default connect(null,mapDispatchToProps)(withStyles(styles)(App));