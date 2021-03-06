import { combineReducers } from 'redux';
import { types } from './types';

const elementsData = (state = { data: null, loadState: false }, action) => {
  switch (action.type) {
    case types.SET_ELEMENTSDATA:
      return {
        data: action.payload,
        loadState: false,
      };
    case types.SET_ELEMENTSDATA_LOADSTATE:
      return {
        data: state.data,
        loadState: action.payload,
      };
    default:
      return state;
  }
};

const selectedDream = (state = { data: null, loadState: false }, action) => {
  switch (action.type) {
    case types.SET_SELECTEDDREAM:
      return {
        data: action.payload,
        loadState: false,
      };
    case types.SET_SELECTEDDREAM_LOADSTATE:
      return {
        data: state.data,
        loadState: action.payload,
      };
    default:
      return state;
  }
};

const postDreamLoadState = (state = false, action) => {
  if (action.type === types.SET_POSTDREAM_LOADSTATE) {
    return action.payload;
  } else {
    return state;
  }
};

const postPurchaseLoadState = (state = false, action) => {
  if (action.type === types.SET_POSTPURCHASE_LOADSTATE) {
    return action.payload;
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  elementsData,
  selectedDream,
  postDreamLoadState,
  postPurchaseLoadState,
});

export default rootReducer;
