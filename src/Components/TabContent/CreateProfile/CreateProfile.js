import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import LoginErrorMessage from '../../LoginErrorMessage/LoginErrorMessage';
import UserAuthenticateDialog from '../../UserAuthenticateDialog/UserAuthenticateDialog';
import ProfileImage_Male from '../../../Images/ProfileImage/ProfileImage_Male.png';
import ProfileImage_Female from '../../../Images/ProfileImage/ProfileImage_Female.png';
import { styles } from './CreateProfileStyle';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Male',
      imageUploaded: false,
      uploadedImage: '',
      loginDialogOpen: true
    };
  }

  handleGenderChange = event => {
    this.setState({ value: event.target.value });
  };

  handleImageUpload = (event) => {
    if(event.target.files.length!==0)
    {
    this.setState({imageUploaded: true,uploadedImage:URL.createObjectURL(event.target.files[0])});
    }
  }

  handleLoginDialogOpenClose = () => {
    this.setState((state)=> ({ loginDialogOpen: !state.loginDialogOpen }));
  };

	render() {
		const { classes } = this.props;
		return (
			
      <Grid container className={classes.createProfile}>
        {(this.props.isUserLoggedIn) ?
				<Grid container item justify="center" alignItems="center" direction="column">
          <Grid container direction="column" alignItems="center" className={classes.profilePhotoContainer}>
            {(this.state.imageUploaded)
            ?
            <img src={this.state.uploadedImage} alt="Profile Icon" className={classes.profilePhoto}/>
            :
            <img src={(this.state.value==='Male')?ProfileImage_Male:ProfileImage_Female} alt="Profile Icon" className={classes.profilePhoto}/>
            }
          </Grid>
          <Grid container item direction="column" alignItems="center" className={classes.formContainerContainer}>
            <FormControl>
              <Grid container item justify="center" alignItems="center" direction="column">
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.nameContainer}>
                  <TextField
                    id="first-name"
                    label="First Name"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    required={true}
                  />
                  <TextField
                    id="middle-name"
                    label="Middle Name"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="last-name"
                    label="Last Name"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    required={true}
                  />
                </Grid>
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.genderContainer}>
                  <FormLabel component="legend" required={true} className={classes.formElement}>Gender</FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.radioGroup}
                    value={this.state.value}
                    onChange={this.handleGenderChange}
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
                  />
                  <TextField
                    id="work-experience"
                    label="Work Experience"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                    required={true}
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
                  />
                  <TextField
                    id="phone-number"
                    label="Mobile Number"
                    className={classes.formElement}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid container item justify="center" alignItems="center" direction="row" className={classes.buttonContainer}>
                  <Button variant="contained" color="primary" className={classes.formElement}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
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
    isUserLoggedIn: state.isUserLoggedIn
  };
};

export default connect(mapStateToProps)(withStyles(styles)(CreateProfile));