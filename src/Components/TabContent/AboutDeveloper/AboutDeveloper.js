import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import { getElapsedYearCount } from '../../../Utilities/Time/ElapsedTimeCount/ElapsedTimeCount';
import profileLogo from '../../../Images/DeveloperImage/Profile.JPG';
import { styles } from './AboutDeveloperStyle';

class AboutDeveloper extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.AboutDeveloper}>
      <Grid container item justify="center" alignItems="center" direction="column">
        <Grid container direction="column" alignItems="center" className={classes.avatarContainer}>
          <Avatar alt="Robin Davis" src={profileLogo} className={classes.avatar} />
          <Grid container item justify="center" alignItems="center" direction="column" className={classes.avatarText}>
            <div>Robin Davis (Front-End Developer)</div>
            <div>Work Experience: {getElapsedYearCount('7 Nov 2017')} Yrs</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item justify="center" alignItems="center" direction="column">
        <Grid container direction="column" style={{width:(this.props.isDesktop)?'45%':'90%'}} item className={classes.profileDescriptionContainer}>
        
        <Grid container justify="center" alignItems="center" direction="row" className={classes.profileDescriptionRow}>
          <Grid item container className={classes.column1}>Email ID</Grid>
          <Grid item container className={classes.column2} justify="flex-end">robin.dvs007@gmail.com</Grid>
        </Grid>

        <Grid container justify="center" alignItems="center" direction="row" className={classes.profileDescriptionRow}>
          <Grid item container className={classes.column1}>Contact Number</Grid>
          <Grid item container className={classes.column2} justify="flex-end">+91 9818424660</Grid>
        </Grid>
        

        <Grid container justify="center" alignItems="center" direction="row" className={classes.profileDescriptionRow}>
          <Grid item container className={classes.column1}>Current Company</Grid>
          <Grid item container className={classes.column2} justify="flex-end">Cognizant</Grid>
        </Grid>
        </Grid>
      </Grid>
			</div>
			);
	}
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AboutDeveloper));