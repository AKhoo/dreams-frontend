import { combineReducers } from 'redux'

const elementsData = (state = {}, action) => {
  if (action.type === 'SET_ELEMENTSDATA') {
    return action.payload;
  } else {
    return state;
  }
};

const loadState = (state = false, action) => {
  if (action.type === 'SET_LOADSTATE') {
    return action.payload;
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  elementsData,
  loadState,
});

export default rootReducer;
