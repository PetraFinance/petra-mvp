import { combineReducers } from 'redux';
import onboarding from './onboarding';
import funds from './funds';

const rootReducer = combineReducers({
  onboarding,
  funds,
});

export default rootReducer;
