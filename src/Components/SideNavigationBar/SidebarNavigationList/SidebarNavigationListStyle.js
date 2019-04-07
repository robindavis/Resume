import { centralColor } from '../../../CentralCSS/Color/Color';
import { centralDimension } from '../../../CentralCSS/Dimension/Dimension';

export const styles ={
	list: {
		width: centralDimension.sidebar.width,
		color: centralColor.sidebar.textColor,
		backgroundColor: centralColor.sidebar.backgroundColor
	},
  listContainer: {
    height: centralDimension.sidebar.height,
    backgroundColor: centralColor.sidebar.backgroundColor
  },
  selectedItem: {
    color: centralColor.sidebar.selectedItemTextColor,
    backgroundColor: centralColor.sidebar.selectedItemBackgroundColor,
    borderBottom: `3px solid ${centralColor.sidebar.selectedItemBorder}`,
    '&:hover':{
      color: centralColor.sidebar.selectedItemTextColor,
      backgroundColor: centralColor.sidebar.selectedItemBackgroundColor,
      borderBottom: `3px solid ${centralColor.sidebar.selectedItemBorder}`
    }
  }
};