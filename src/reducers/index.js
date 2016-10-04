import { combineReducers } from 'redux';
import { routerReducer } from 'react-native-redux-router';
import onboarding from './onboarding';
import funds from './funds';

const rootReducer = combineReducers({
  routerReducer,
  onboarding,
  funds,
});

export default rootReducer;
