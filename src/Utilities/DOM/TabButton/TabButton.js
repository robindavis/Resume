import React, {Component} from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { styles } from "./TabButtonStyle";

class TabButton extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Button
        className={this.props.selected?classNames(classes.tabButton,classes.selected):classNames(classes.tabButton,classes.normal)} 
        style={{flexBasis:this.props.basisWidth,
                fontSize:this.props.fontSize||'2.5vmin'
              }} 
        onClick={()=>this.props.tabChange(this.props.name)}
        name={this.props.name}
      >
        {this.props.name}
      </Button>
      );
  }
};

export default withStyles(styles)(TabButton);