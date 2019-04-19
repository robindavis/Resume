import * as actionType from '../Actions/ActionType/ActionType';
import { isCurrentDesktopView } from '../../Utilities/DOM/IsCurrentDesktopView/IsCurrentDesktopView';

const initialState = {
  selectedTab: 'Home',
  isDesktop: isCurrentDesktopView(),
  isSideBarOpened: false,
  isUserLoggedIn: false,
  userInfo: null
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
    case actionType.USER_LOGIN_STATUS:
      {
        return Object.assign({}, state, {isUserLoggedIn: action.isUserLoggedIn});
      }
    case actionType.USER_INFO:
      {
        return Object.assign({}, state, {userInfo: action.userInfo});
      }
    default:
      {
        return state;
      }
  }
};

export default rootReducer;