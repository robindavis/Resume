import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './TextDisplayStyle';

class TextDisplay extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper 
        className={classes.textDisplay} 
        style={{flexBasis:this.props.basisWidth,
                justifyContent:this.props.horizontalPosition||'center',
                alignItems:this.props.verticalPosition||'center',
                fontSize:this.props.fontSize||'2.5vmin'
              }}
      >
        {this.props.text}
      </Paper>
      );
  }
}

export default withStyles(styles)(TextDisplay);