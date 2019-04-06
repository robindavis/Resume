import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';
import { centralDimension } from '../../../CentralCSS/Dimension/Dimension';

export const styles ={
	list: {
		width: centralDimension.sidebar.width,
		color: colorTheme.sidebar.textColor,
		backgroundColor: colorTheme.sidebar.backgroundColor
	},
  listContainer: {
    height: centralDimension.sidebar.height,
    backgroundColor: colorTheme.sidebar.backgroundColor
  }
};