import { combineReducers } from 'redux';
import goals from './goals';
import overview from './overview';

const rootReducer = combineReducers({
  goals,
  overview,
});

export default rootReducer;
