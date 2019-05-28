import { combineReducers } from 'redux';
import { types } from './types';

const elementsData = (state = {data: null, loadState: false}, action) => {
  switch (action.type) {
    case types.SET_ELEMENTSDATA:
      return {
        data: action.payload,
        loadState: false,
      }
    case types.SET_ELEMENTSDATA_LOADSTATE:
      return {
        data: state.data,
        loadState: action.payload,
      }
    default:
      return state;
  }
};

const selectedDream = (state = {data: null, loadState: false}, action) => {
  switch (action.type) {
    case types.SET_SELECTEDDREAM:
      return {
        data: action.payload,
        loadState: false,
      }
    case types.SET_SELECTEDDREAM_LOADSTATE:
      return {
        data: state.data,
        loadState: action.payload,
      }
    default:
      return state;
  }
};

const messages = (state = [], action) => {
  if (action.type === types.ADD_MESSAGE) {
    if (action.payload.alertVariant === 'success') {
      return [action.payload];
    } else {
      return [...state, action.payload];
    }
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  elementsData,
  messages,
  selectedDream,
});

export default rootReducer;
