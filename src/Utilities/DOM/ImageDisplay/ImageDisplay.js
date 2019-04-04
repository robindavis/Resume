import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './ImageDisplayStyle';

class ImageDisplay extends Component {
  render() {
    const { classes } = this.props;
    const imageObject =(
      <img 
        className={classes.imageDisplay} 
        src={this.props.src}
        alt={this.props.text||'Sample Text'} 
        style={{height:this.props.height||'100%',
                width:this.props.width||'100%'
              }}
      />
      );
    const formatedImageObject = (this.props.href) ? 
      (<a target="_blank" href={this.props.href} rel="noopener noreferrer">{imageObject}</a>) : 
      imageObject;
    return (
      <Paper 
        className={classes.imageContainer} 
        style={{flexBasis:this.props.basisWidth,
                justifyContent:this.props.horizontalPosition||'center',
                alignItems:this.props.verticalPosition||'center'
              }}
      >
        {formatedImageObject}
      </Paper>
      );
  }
}

export default withStyles(styles)(ImageDisplay);