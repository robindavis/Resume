import { centralColor } from '../../../CentralCSS/Color/Color';
import { centralDimension } from '../../../CentralCSS/Dimension/Dimension';

export const styles = {
  titleBarContainer: {
    height: centralDimension.header.height,
    color: centralColor.header.titleBar.textColor,
    backgroundColor: centralColor.header.titleBar.backgroundColor
  },
  titleToolBarContainer: {
    height: centralDimension.header.height,
    minHeight: '0'
  },
  titleMenuButtonContainer: {
    marginLeft: -12,
    marginRight: 20
  },
  titleBar: {
    flexGrow: 1  
  }
};