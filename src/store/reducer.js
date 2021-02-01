import * as actionTypes from './constants';

const defaultState = {
  userInfo: {
    userId: '001',
    name:'刘巧纯',
  },
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.USER_INFO:
        return { ...state, userInfo: action.data };
    default:
        return state;
  }
};