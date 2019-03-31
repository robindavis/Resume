import * as actionType from '../Actions/ActionType/ActionType';
import { isCurrentDesktopView } from '../../Utilities/DOM/IsCurrentDesktopView/IsCurrentDesktopView';

const initialState = {
  selectedTab: 'Home',
  isDesktop: isCurrentDesktopView(),
  isSideBarOpened: false
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.TAB_CHANGE:
      {
        return Object.assign({}, state, {selectedTab: action.selectedTab});
      }
    case actionType.VIEW_CHANGE:
      {
        return Object.assign({}, state, {isDesktop: action.isDesktop});
      }
    case actionType.SIDEBAR_OPENED:
      {
        return Object.assign({}, state, {isSideBarOpened: action.isSideBarOpened});
      }
    default:
      {
        return state;
      }
  }
};

export default rootReducer;