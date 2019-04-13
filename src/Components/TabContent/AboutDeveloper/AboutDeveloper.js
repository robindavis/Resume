import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import { getElapsedYearCount } from '../../../Utilities/Time/ElapsedTimeCount/ElapsedTimeCount';
import profileLogo from '../../../Images/DeveloperImage/Profile.JPG';
import FirebaseLogo from '../../../Images/FirebaseLogo/FirebaseLogo.png';
import MaterialUILogo from '../../../Images/MaterialUILogo/MaterialUILogo.png';
import NPMLogo from '../../../Images/NPMLogo/NPMLogo.png';
import ReactLogo from '../../../Images/ReactLogo/ReactLogo.png';
import FacebookLogo from '../../../Images/FacebookLogo/FacebookLogo.png';
import GmailLogo from '../../../Images/GmailLogo/GmailLogo.png';
import LinkedInLogo from '../../../Images/LinkedInLogo/LinkedInLogo.png';
import TwitterLogo from '../../../Images/TwitterLogo/TwitterLogo.png';
import ReduxLogo from '../../../Images/ReduxLogo/ReduxLogo.png';
import GithubLogo from '../../../Images/GithubLogo/GithubLogo.png';
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
        <Grid container direction="column" alignItems="center" style={{width:this.props.isDesktop?'70%':'90%'}} className={classes.techStackContainer}>
          <div  className={classes.techStackHeading}>Technologies Used</div>
          <Grid container className={classes.techStackItemContainer}>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
              <img alt="React Logo" src={ReactLogo} className={classes.techStackLogo}/>
              <div>React</div>
            </Grid>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
              <img alt="Redux Logo" src={ReduxLogo} className={classes.techStackLogo}/>
              <div>Redux</div>
            </Grid>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
              <img alt="Material UI Logo" src={MaterialUILogo} className={classes.techStackLogo}/>
              <div>Material UI</div>
            </Grid>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
              <img alt="NPM Logo" src={NPMLogo} className={classes.techStackLogo}/>
              <div>NPM</div>
            </Grid>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
              <img alt="Firebase Logo" src={FirebaseLogo} className={classes.techStackLogo}/>
              <div>Firebase</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item justify="center" alignItems="center" direction="column">
        <Grid container direction="column" alignItems="center" style={{width:this.props.isDesktop?'20%':'90%'}} className={classes.sourceCodeContainer}>
          <div  className={classes.sourceCodeHeading}>Source Code</div>
          <Grid container className={classes.sourceCodeItemContainer}>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.sourceCodeItem}>
              <a href="https://github.com/robindavis/Resume" rel="noopener noreferrer" target="_blank">
              <Tooltip disableFocusListener title="Github Repo" TransitionComponent={Zoom} placement="bottom">
              <img alt="Github Logo" src={GithubLogo} className={classes.sourceCodeLogo}/>
              </Tooltip>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item justify="center" alignItems="center" direction="column">
        <Grid container direction="column" alignItems="center" style={{width:this.props.isDesktop?'30%':'90%'}} className={classes.onlineConnectContainer}>
          <div  className={classes.onlineConnectHeading}>Contact Me</div>
          <Grid container className={classes.onlineConnnectItemContainer}>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.onlineConnectItem}>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=robin.dvs007@gmail.com" rel="noopener noreferrer" target="_blank">
              <Tooltip disableFocusListener title="Gmail" TransitionComponent={Zoom} placement="bottom">
              <img alt="Gmail Logo" src={GmailLogo} className={classes.onlineConnectLogo}/>
              </Tooltip>
              </a>
            </Grid>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.onlineConnectItem}>
              <a href="https://www.linkedin.com/in/robin-davis-6b4631131" target="_blank" rel="noopener noreferrer">
              <Tooltip disableFocusListener title="Linked In" TransitionComponent={Zoom} placement="bottom">
              <img alt="LinkedIn Logo" src={LinkedInLogo} className={classes.onlineConnectLogo}/>
              </Tooltip>
              </a>
            </Grid>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.onlineConnectItem}>
              <a href="https://www.facebook.com/robin.davis.5496" target="_blank" rel="noopener noreferrer">
              <Tooltip disableFocusListener title="Facebook" TransitionComponent={Zoom} placement="bottom">
              <img alt="Facebook Logo" src={FacebookLogo} className={classes.onlineConnectLogo}/>
              </Tooltip>
              </a>
            </Grid>
            <Grid container item direction="column" justify="center" alignItems="center" className={classes.onlineConnectItem}>
              <a href="https://twitter.com/RobinDavis007" target="_blank" rel="noopener noreferrer">
              <Tooltip disableFocusListener title="Twitter" TransitionComponent={Zoom} placement="bottom">
              <img alt="Twitter Logo" src={TwitterLogo} className={classes.onlineConnectLogo}/>
              </Tooltip>
              </a>
            </Grid>
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