import * as actionType from './ActionType/ActionType';

export const changeSelectedTab = (newTabName) => {
  return { type: actionType.TAB_CHANGE, selectedTab: newTabName };
};

export const changeDesktopMobileView = (isDesktop) => {
  return { type: actionType.VIEW_CHANGE, isDesktop: isDesktop };
};

export const changeSideBarStatus = (isSideBarOpened) => {
  return { type: actionType.SIDEBAR_OPENED, isSideBarOpened: isSideBarOpened };
};
