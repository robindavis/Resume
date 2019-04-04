import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SiteIconStyle';

class SiteIcon extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.siteIcon} style={{flexBasis:this.props.basisWidth||'20%'}}>
        <Paper className={classes.wrap}>
          <div className={classes.cube}>
            <div className={classes.front}>&clubs;</div>
            <div className={classes.back}>&#9728;</div>
            <div className={classes.top}> &#9763;</div>
            <div className={classes.bottom}>&#9775;</div>
            <div className={classes.left}>&#9819;</div>
            <div className={classes.right}>&#9836;</div>
          </div>
        </Paper>
      </Paper>
      );
  }
}

export default withStyles(styles)(SiteIcon);