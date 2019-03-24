import * as actionType from './ActionType/ActionType';

export const changeSelectedTab = (newTabName) => {
  return { type: actionType.TAB_CHANGE, selectedTab: newTabName };
};