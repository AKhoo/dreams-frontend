import { combineReducers } from 'redux'

const elementsData = (state = {}, action) => {
  if (action.type === 'SET_ELEMENTSDATA') {
    return action.payload;
  } else {
    return state;
  }
}

const rootReducer = combineReducers({
  elementsData,
});

export default rootReducer;
