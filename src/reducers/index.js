import { combineReducers } from 'redux';
import { routerReducer } from 'react-native-redux-router';
import onboarding from './onboarding';

const rootReducer = combineReducers({
  routerReducer,
  onboarding,
});

export default rootReducer;
