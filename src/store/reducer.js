import * as actionTypes from './constants';

const defaultState = {
    hotList: [],
    searchList: [],
    enterLoading: false,
    number: 0,
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NUMBER:
            return { ...state, number: action.data };
        case actionTypes.SET_HOT_KEYWRODS:
            return { ...state, hotList: action.data };
        case actionTypes.SET_RESULT_LIST:
            return { ...state, searchList: action.data };
        case actionTypes.SET_ENTER_LOADING:
            return { ...state, enterLoading: action.data };
        default:
            return state;
    }
};