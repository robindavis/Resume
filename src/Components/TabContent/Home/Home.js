import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { connect } from 'react-redux';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import photo1 from '../../../Images/Banner/photo1.png';
import photo2 from '../../../Images/Banner/photo2.png';
import photo3 from '../../../Images/Banner/photo3.png';
import { styles } from './HomeStyle';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onChange = value => this.setState({ value });

	render() {
		const { classes } = this.props;
    const arrowData =(this.props.isDesktop)?{arrowLeft:<ArrowBackIos className={classes.desktopArrow}/>,arrowRight:<ArrowForwardIos className={classes.desktopArrow}/>,addArrowClickHandler:true}:{arrowLeft:<ArrowBackIos className={classes.mobileArrow}/>,arrowRight:<ArrowForwardIos className={classes.mobileArrow}/>,addArrowClickHandler:true};
		return (
			<Grid container item  justify="center" alignItems="center" className={classes.homeContainer}>
				<Grid container item justify="center" alignItems="center" direction="column">
          <div className={classes.headingTitle}>Welcome to Resume Builder</div>
          <div className={classes.headingDescription}>
            Resumes are used to make a favorable impression on a prospective employer. Your resume is often the first impression a potential employer has of you. For this reason, it is often referred to as one of the most crucial steps taken during a job search.
            <br/><br/>
            An electronic resume is a plain text (ASCII), PDF or HTML document that provides an employer with information regarding a job candidate's professional experience, education and job qualifications and is meant to be read by a computer program instead of by a human being.
          </div>
          <div className={classes.carouselContainer}>
          <Carousel
          value={this.state.value}
             onChange={this.onChange}
             infinite
             centered
             animationSpeed={300}
             autoPlay={1500}
             stopAutoPlayOnHover
             slidesPerPage={1}
             {...arrowData}
          >
                <img src={photo1} alt="photo1" className={classes.bannerItem}/>
                <img src={photo2} alt="photo2"  className={classes.bannerItem}/>
                <img src={photo3} alt="photo3"  className={classes.bannerItem}/>
              </Carousel>
               <Dots value={this.state.value} onChange={this.onChange} number={3} />
          </div>
          <div className={classes.siteInfoHeading}>
            User Activity Status
          </div>
          <div className={classes.siteInfo}>
            Total Profiles Created: {this.props.siteInfoData.TotalResumes}
            <br/>
            <br/>
            Number of Users Logged In: 0
          </div>
        </Grid>
			</Grid>
			);
	}
}

const mapStateToProps = (state, props) => {
  return {
    isDesktop: state.isDesktop,
    siteInfoData: state.siteInfoData
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Home));