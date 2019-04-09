import { centralColor } from '../../../CentralCSS/Color/Color';
import { centralDimension } from '../../../CentralCSS/Dimension/Dimension';

export const styles = {
  navBarContainer: {
    flexBasis: '60%',
    overflow: 'hidden'
  },
  navBarWrapper: {
    height: centralDimension.header.height,
    overflow: 'hidden'
  },
  tabContainer: {
    height: centralDimension.header.height,
    minHeight: '0',
    overflow: 'hidden',
    '& div': {
      height: centralDimension.header.height,
      overflow: 'hidden'
    }
  },
  normalTabBarItem: {
    height: centralDimension.header.height,
    overflow: 'hidden',
    color: centralColor.header.navBar.textColor,
    backgroundColor: centralColor.header.navBar.backgroundColor,
    opacity: '1',
    alignSelf: 'center',
    fontSize: centralDimension.header.normalTabFontSize
  },
  selectedTabBarItem: {
    height: centralDimension.header.height,
    overflow: 'hidden',
    color: centralColor.header.navBar.selectedTabTextColor,
    backgroundColor: centralColor.header.navBar.selectedTabBackgroundColor,
    opacity: '1',
    alignSelf: 'center',
    fontSize: centralDimension.header.selectedTabFontSize
  },
  indicator:{
    height: centralDimension.header.indicatorWidth,
    backgroundColor: centralColor.header.navBar.indicatorColor
  },
  tabIcon: {
    fontSize: centralDimension.header.tabIconFontSize
  }
};