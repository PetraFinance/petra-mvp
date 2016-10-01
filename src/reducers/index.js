import { combineReducers } from 'redux';
import { routerReducer } from 'react-native-redux-router';
import onboarding from './onboarding';
import overview from './overview';

const rootReducer = combineReducers({
  routerReducer,
  onboarding,
  overview,
});

export default rootReducer;
