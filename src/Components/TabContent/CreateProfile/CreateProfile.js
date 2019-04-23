import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Warning from '@material-ui/icons/Warning';

import * as RootAction from '../../../GlobalState/Actions/RootAction';
import { fireStore, fireStorage } from '../../../Firebase/FirebaseConfig';
import LoginErrorMessage from '../../LoginErrorMessage/LoginErrorMessage';
import UserAuthenticateDialog from '../../UserAuthenticateDialog/UserAuthenticateDialog';
import ProfileImage_Male from '../../../Images/ProfileImage/ProfileImage_Male.png';
import ProfileImage_Female from '../../../Images/ProfileImage/ProfileImage_Female.png';
import { styles } from './CreateProfileStyle';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUploaded: false,
      uploadedImage: '',
      loginDialogOpen: true,
      profileSubmitted: false,
      firstName: '',
      middleName: '',
      lastName: '',
      gender: 'Male',
      age: '',
      occupation: '',
      workExperience: '',
      email: '',
      mobileNumber: '',
      imageUploadURL: '',
      submitButtonDisabled: false,
      imageSizeExceeded: false
    };
  }

  handleImageUpload = (event) => {
    if(event.target.files.length!==0) {
      if(event.target.files[0].size<=52000) {
        this.setState({imageSizeExceeded: false,imageUploaded: true,uploadedImage:URL.createObjectURL(event.target.files[0]),submitButtonDisabled: true});

        // Uploading Image and Getting URL reference for the same
        var storageRef = fireStorage.child(`${this.props.userInfo.uid}/Profile${(this.props.userProfileSettings.TotalProfilesCreated+1)}.jpg`);
        storageRef.put(event.target.files[0]).then((snapshot)=>{
          storageRef.getDownloadURL().then((url)=>{
            this.setState({imageUploadURL:url,submitButtonDisabled: false});
          }).catch(error=>console.log(error));
        });
      } else {
        this.setState({imageSizeExceeded: true});
      }
    }
  }

  handleLoginDialogOpenClose = () => {
    this.setState((state)=> ({ loginDialogOpen: !state.loginDialogOpen, profileSubmitted: false}));
  };

  handleFormSubmition = (event) => {
    event.preventDefault();
    this.setState({profileSubmitted: true});

    // Copying Profile Settings before getting changed
    var userProfilesCreated = this.props.userProfileSettings;
    ++userProfilesCreated.TotalProfilesCreated;
    var siteInfoData = this.props.siteInfoData;
    ++siteInfoData.TotalResumes;

    // Uploading User's Form Data
    var newProfilePath =fireStore.collection('Users').doc(`${this.props.userInfo.uid}`).collection('Profiles').doc(`Profile${userProfilesCreated.TotalProfilesCreated}`);
    newProfilePath.set({
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      age: this.state.age,
      occupation: this.state.occupation,
      workExperience: this.state.workExperience,
      email: this.state.email,
      mobileNumber: this.state.mobileNumber,
      imageUploadURL: this.state.imageUploadURL,
      imageUploaded: this.state.imageUploaded
    },{merge: true}).then(()=>{}).catch(error=>console.log(error));

    // Incrementing User's Total Profile Count
    var commonProfileSettings =fireStore.collection('Users').doc(`${this.props.userInfo.uid}`).collection('ProfileSettings').doc('Common');
    commonProfileSettings.get().then((docData)=>{
      if(docData.exists) {
        commonProfileSettings.update({TotalProfilesCreated: userProfilesCreated.TotalProfilesCreated}).then(()=>{}).catch(error=>console.log(error));
      }
    }).catch(error=>console.log(error));

    // Incrementing Site's Total Profile Count
    var siteUserInfoDoc =fireStore.collection('SiteInfo').doc('Users');
    siteUserInfoDoc.get().then((docData)=>{
      if(docData.exists) {
        siteUserInfoDoc.update({TotalResumes: siteInfoData.TotalResumes}).then(()=>{}).catch(error=>console.log(error));
      }
    }).catch(error=>console.log(error));

    // Updating Redux Site's Info
    this.props.updateSiteInfo(siteInfoData);
    // Updating Redux User's Profile Settings
    this.props.updateUserProfileSettings(userProfilesCreated);
  };

  handleFormView = () => {
    this.setState({
      profileSubmitted: false,
      firstName: '',
      middleName: '',
      lastName: '',
      gender: 'Male',
      age: '',
      occupation: '',
      workExperience: '',
      email: '',
      mobileNumber: '',
      imageUploadURL: '',
      imageUploaded: ''
    });

  };

  handleFormInput = event => {
    if(event.target.id!=="")
    this.setState({[event.target.id]: event.target.value});
  else 
    this.setState({[event.target.name]: event.target.value});
  };

  handleImageSizeDialogClose = () => {
    this.setState({imageSizeExceeded: false});
  }

	render() {
		const { classes } = this.props;
		return (
			
      <Grid container className={classes.createProfile}>
        {(this.props.isUserLoggedIn) ?
				<Grid container item justify="center" alignItems="center" direction="column">
          {(!this.state.profileSubmitted) ?
          <>
          <Grid container direction="column" alignItems="center" className={classes.profilePhotoContainer}>
            {(this.state.imageUploaded)
            ?
            <img src={this.state.uploadedImage} alt="Profile Icon" className={classes.profilePhoto}/>
            :
            <img src={(this.state.gender==='Male')?ProfileImage_Male:ProfileImage_Female} alt="Profile Icon" className={classes.profilePhoto}/>
            }
          </Grid>
          <Grid container item direction="column" alignItems="center" className={classes.formContainerContainer}>
            <form onSubmit={this.handleFormSubmition}>
              <Grid container item justify="center" alignItems="center" direction="column">
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.nameContainer}>
                  <TextField
                    id="firstName"
                    label="First Name"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    required={true}
                    onChange={this.handleFormInput}
                  />
                  <TextField
                    id="middleName"
                    label="Middle Name"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleFormInput}
                  />
                  <TextField
                    id="lastName"
                    label="Last Name"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    required={true}
                    onChange={this.handleFormInput}
                  />
                </Grid>
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.genderContainer}>
                  <FormLabel component="legend" required={true} className={classes.formElement}>Gender</FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    name="gender"
                    className={classes.radioGroup}
                    value={this.state.gender}
                    onChange={this.handleFormInput}
                  >
                  <FormControlLabel value="Male" control={<Radio />} label="Male" className={classes.formElement}/>
                  <FormControlLabel value="Female" control={<Radio />} label="Female" className={classes.formElement}/>
                  </RadioGroup>
                </Grid>
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.ageContainer}>
                  <TextField
                    id="age"
                    label="Age"
                    type="number"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    required={true}
                    onChange={this.handleFormInput}
                  />
                </Grid>
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.profilePhotoUploadContainer}>
                  <FormLabel component="legend" className={classes.formElement}>Profile Photo</FormLabel>
                  <input
                    accept="image/*"
                    className={classes.fileUploadButton}
                    id="outlined-button-file"
                    multiple
                    type="file"
                    onChange={this.handleImageUpload}
                  />
                  <label htmlFor="outlined-button-file">
                    <Button variant="outlined" component="span" className={classes.button}>
                      Upload
                    </Button>
                  </label>
                </Grid>
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.occupationContainer}>
                  <TextField
                    id="occupation"
                    label="Occupation"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    required={true}
                    onChange={this.handleFormInput}
                  />
                  <TextField
                    id="workExperience"
                    label="Work Experience"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    required={true}
                    onChange={this.handleFormInput}
                  />
                </Grid>
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.contactContainer}>
                  <TextField
                    id="email"
                    label="Email"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    required={true}
                    onChange={this.handleFormInput}
                  />
                  <TextField
                    id="mobileNumber"
                    label="Mobile Number"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleFormInput}
                  />
                </Grid>
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.buttonContainer}>
                  <Button disabled={this.state.submitButtonDisabled} type="submit" variant="contained" color="primary" className={classes.formElement}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          {(this.state.imageSizeExceeded) && 
            <Dialog
              open={this.state.imageSizeExceeded}
              onClose={this.handleImageSizeDialogClose}
            >
            <DialogTitle className={classes.imageSizeDialogHeading}>
            <Grid container direction="column" justify="center" alignItems="center" className={classes.imageSizeDialogWrapper}>
            <Warning className={classes.imageSizeDialogIcon}/>
            <div>Uploaded Image Size Exceeded !</div>
            <div className={classes.imageSizeDialogNote}>Image size should be less than 50Kb</div>
            <br/>
            <Button variant="contained" color="primary" onClick={this.handleImageSizeDialogClose}>Okay</Button>
            </Grid>
            </DialogTitle>
            </Dialog>
          }
          </>
          :
          <>
          <Grid container item justify="center" alignItems="center" direction="column" className={classes.formMessageContainer}>
          <AssignmentTurnedIn className={classes.formMessageIcon}/>
          <div className={classes.formMessage}>
          Form Submitted Successfully !<br/><br/>
          You can see all your created resumes in "View Profile" Tab
          </div>
          </Grid>
          <Button variant="contained" color="primary" className={classes.formMessageButton} onClick={this.handleFormView}>
            Create Another Profile
          </Button>
          </>
        }
        </Grid>
        :
        <>
        <LoginErrorMessage tabName="Create Profile" handleLoginDialogOpenClose={this.handleLoginDialogOpenClose}/>
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
    userProfileSettings: state.userProfileSettings,
    siteInfoData: state.siteInfoData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserProfileSettings: userProfileSettings => dispatch(RootAction.updateUserProfileSettings(userProfileSettings)),
    updateSiteInfo: siteInfoData => dispatch(RootAction.updateSiteInfo(siteInfoData))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(CreateProfile));