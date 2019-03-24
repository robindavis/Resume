import * as actionType from '../Actions/ActionType/ActionType';

const initialState = {
  selectedTab: 'Home'
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.TAB_CHANGE:
      {
        return Object.assign({}, state, {selectedTab: action.selectedTab});
      }
    default:
      {
        return state;
      }
  }
};

export default rootReducer;