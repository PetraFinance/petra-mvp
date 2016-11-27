import { combineReducers } from 'redux';
import goals from './goals';
import accounts from './accounts';

const rootReducer = combineReducers({
  goals,
  accounts,
});

export default rootReducer;
