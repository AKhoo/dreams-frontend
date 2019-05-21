import { combineReducers } from 'redux';
import { types } from './types';

const elementsData = (state = {}, action) => {
  if (action.type === types.SET_ELEMENTSDATA) {
    return action.payload;
  } else {
    return state;
  }
};

const loadState = (state = false, action) => {
  if (action.type === types.SET_LOADSTATE) {
    return action.payload;
  } else {
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

const selectedDream = (state = {}, action) => {
  if (action.type === types.SET_SELECTEDDREAM) {
    return action.payload;
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  elementsData,
  loadState,
  messages,
  selectedDream,
});

export default rootReducer;
