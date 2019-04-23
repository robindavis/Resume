import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

import ProfileImage_Male from '../../../Images/ProfileImage/ProfileImage_Male.png';
import ProfileImage_Female from '../../../Images/ProfileImage/ProfileImage_Female.png';
import { fireStore } from '../../../Firebase/FirebaseConfig';
import LoginErrorMessage from '../../LoginErrorMessage/LoginErrorMessage';
import UserAuthenticateDialog from '../../UserAuthenticateDialog/UserAuthenticateDialog';
import { styles } from './ViewProfileStyle';

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDialogOpen: true,
      profilesArray: []
    };

    fireStore.collection('Users').doc(`${this.props.userInfo.uid}`).collection('Profiles').get().then((querySelector)=>{
      this.setState({profilesArray:querySelector.docs.map((doc)=>{
        console.log(doc.data());
        return doc.data();
      })});
    });
  }

  handleLoginDialogOpenClose = () => {
    this.setState((state)=> ({ loginDialogOpen: !state.loginDialogOpen,profilesArray: []}));
  };

	render() {
		const { classes } = this.props;
    const profileArrayContainers = this.state.profilesArray.map((data,index)=>{
      return (
        <Paper key={index} className={classes.profileShortBoxContainer}>
        <Grid container item direction="column">
          <Grid justify="space-between" container item>
            <img src={(data.imageUploaded)?data.imageUploadURL:(data.gender==="Male")?ProfileImage_Male:ProfileImage_Female} alt="Profile Icon" className={classes.profilePhoto}/>
            <Grid container item direction="column" alignItems="flex-end" className={classes.profileDescription}>
              <span>Name: {data.firstName} {data.middleName} {data.lastName}</span>
              <span>Age: {data.age}</span>
            </Grid>
          </Grid>
        </Grid>
        </Paper>
        );
    })
		return (
      <Grid justify="center" container className={classes.viewProfile}>
        {(this.props.isUserLoggedIn) ?
          <>
          {profileArrayContainers}
          </>
          :
          <>
          <LoginErrorMessage tabName="View Profiles" handleLoginDialogOpenClose={this.handleLoginDialogOpenClose}/>
          <UserAuthenticateDialog handleLoginDialogOpenClose={this.handleLoginDialogOpenClose} open={this.state.loginDialogOpen}/>
          </>
        }
			</Grid>
			);
	}
}

const mapStateToProps = (state, props) => {
  return {
    isUserLoggedIn: state.isUserLoggedIn,
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ViewProfile));