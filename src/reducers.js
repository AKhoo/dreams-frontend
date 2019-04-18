import { CreateDreamForm } from './actions';
import { combineReducers } from 'redux';

const setCreateDreamForm = (state = CreateDreamForm, action) => {
  if (action.type === 'MODIFY_CREATEDREAM_FORM') {
    console.log('reducer!', action.payload.data);
    return action.payload.data;
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  createDreamForm: setCreateDreamForm,
});

export default rootReducer;
