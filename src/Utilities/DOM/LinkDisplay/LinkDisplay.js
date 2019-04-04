import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './LinkDisplayStyle';

class LinkDisplay extends Component {
  render() {
    const { classes } = this.props;
    return (
      <a 
        className={classes.linkDisplay} 
        style={{flexBasis:this.props.basisWidth}}
        href={this.props.href}
      >
        {this.props.text}
      </a>
      );
  }
}

export default withStyles(styles)(LinkDisplay);