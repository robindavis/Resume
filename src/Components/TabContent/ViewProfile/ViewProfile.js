import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import Call from '@material-ui/icons/Call';
import Mail from '@material-ui/icons/Mail';

import { getCurrentDate } from '../../../Utilities/Time/CurrentDateTime/CurrentDateTime';
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
      profilesArray: [],
      showSelectedResume: false,
      selectedResume: {},
      initialFetch: false,
      renderedForDesktop: this.props.isDesktop,
      resumeNumberSelected: 0
    };
  }

  handleLoginDialogOpenClose = (userStatus,userId) => {
    if(userStatus==="success") {
      fireStore.collection('Users').doc(`${userId}`).collection('Profiles').get().then((querySelector)=>{
        this.setState((state)=>({profilesArray:querySelector.docs.map((doc)=>{
          return doc.data();
        }),initialFetch:true,loginDialogOpen: !state.loginDialogOpen}));
      });
    } else {
      this.setState((state)=> ({ loginDialogOpen: !state.loginDialogOpen,profilesArray: [], initialFetch: false}));
    }
  };

  handleBackButtonClick = () => {
    this.setState({showSelectedResume: false});
  }

  handleResumeClick = (index) => {
    const { classes } = this.props;
    var data=this.state.profilesArray[index];
    const selectedResume = (
      <Grid container item direction="column">
      <Button variant="contained" color="primary" className={classes.backButton} onClick={this.handleBackButtonClick}>
        <KeyboardBackspace />
      </Button>
      <Grid container item direction="column" className={classes.resumeContainer}>
        <Grid direction={(this.props.isDesktop)?"row":"column"} container item alignItems={(this.props.isDesktop)?"flex-end":"center"} wrap="nowrap">
          <Grid container item justify="center" alignItems="center" className={classes.resumePhotoContainer}>
          <img src={(data.imageUploaded)?data.imageUploadURL:(data.gender==="Male")?ProfileImage_Male:ProfileImage_Female} alt="Profile Icon" className={classes.resumePhoto}/>
          </Grid>
          <div className={classes.resumeNameContainer}>
          <span className={classes.resumeName} style={{padding:(this.props.isDesktop)?"0":"0% 5% 0%",textAlign:(this.props.isDesktop)?"left":"center"}}>{data.firstName} {data.middleName} {data.lastName}</span>
          </div>
        </Grid>
        <Grid container item>
          <Grid container item direction="column" className={classes.resumeLeftPanel} style={{width:(this.props.isDesktop)?"20%":"40%"}}>
            <Grid container item direction="column" className={classes.elementContainer}>
              <div className={classes.textHeading}>About Me</div>
              <div className={classes.textElement}>Age: {data.age}</div>
              <div className={classes.textElement}>Gender: {data.gender}</div>
            </Grid>
            <br/>
            <br/>
            <Grid container item direction="column" className={classes.elementContainer}>
              <div className={classes.textHeading}>Contact</div>
              <Grid container className={classes.textElementContainer} wrap="nowrap">
                <Mail className={classes.iconElement}/>
                <div className={classes.textElement}>{data.email}</div>
              </Grid>
              <Grid container className={classes.textElementContainer} wrap="nowrap">
                <Call className={classes.iconElement}/>
                <div className={classes.textElement}>{data.mobileNumber}</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item direction="column" className={classes.resumeRightPanel}>
            <div className={classes.mainHeading}>CAREER OBJECTIVE</div>
            <div  className={classes.mainElement}>To work in a competitive environment to prove the competency skill I have and work for the company's betterment and self-progress.</div>

            <div className={classes.mainHeading}>Profile Summary</div>
            <div  className={classes.mainElement}>I am a {data.occupation} with over {data.workExperience} years of experience in handling multi-national clients. My unique professional experience stems from years of providing excellent customer support creative problem solving and building customer loyalty.</div>

            <div className={classes.endingHeading}>Declaration</div>
            <div  className={classes.endingElement}>I do hereby confirm that the above details given by me are true to the best of my knowledge.</div>
            <div  className={classes.endingElement}>Data: {getCurrentDate()}</div>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      );
    this.setState({showSelectedResume:true,selectedResume:selectedResume,resumeNumberSelected: index,renderedForDesktop: this.props.isDesktop});
  };

  componentDidMount() {
    if(this.props.isUserLoggedIn && !this.state.initialFetch) {
      fireStore.collection('Users').doc(`${this.props.userInfo.uid}`).collection('Profiles').get().then((querySelector)=>{
        this.setState({profilesArray:querySelector.docs.map((doc)=>{
          return doc.data();
        }),initialFetch:true});
      });
    }
  }

  componentDidUpdate() {
    if(this.props.isDesktop!==this.state.renderedForDesktop && this.state.showSelectedResume) {
      this.handleResumeClick(this.state.resumeNumberSelected);
    }
  }

	render() {
		const { classes } = this.props;
    const profileArrayContainers = this.state.profilesArray.map((data,index)=>{
      return (
        <Button key={index} onClick={e=>this.handleResumeClick(index)}>
        <Paper className={classes.profileShortBoxContainer}>
        <Grid container item direction="column">
          <Grid justify="space-between" container item wrap="nowrap">
            <img src={(data.imageUploaded)?data.imageUploadURL:(data.gender==="Male")?ProfileImage_Male:ProfileImage_Female} alt="Profile Icon" className={classes.profilePhoto}/>
            <Grid container justify="center" item direction="column" alignItems="center" className={classes.profileDescription}>
              <span>{data.firstName} {data.middleName} {data.lastName}</span>
              <span>({data.occupation})</span>
            </Grid>
          </Grid>
        </Grid>
        </Paper>
        </Button>
        );
    })
		return (
      <Grid justify="center" container className={classes.viewProfile}>
        {(this.props.isUserLoggedIn) ?
          <>
          {this.state.showSelectedResume ?
            this.state.selectedResume
            :
            profileArrayContainers
          }
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
    userInfo: state.userInfo,
    isDesktop: state.isDesktop
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ViewProfile));