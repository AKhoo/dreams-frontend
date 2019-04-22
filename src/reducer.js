import { combineReducers } from 'redux'

const elementList = (state = {}, action) => {
  if (action.type === 'SET_ELEMENTLIST') {
    return action.payload;
  } else {
    return state;
  }
}

const rootReducer = combineReducers({
  elementList,
});

export default rootReducer;
