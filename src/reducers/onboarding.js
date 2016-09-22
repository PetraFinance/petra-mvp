import Immutable from 'immutable';
import * as ActionType from '../actions/onboarding';

const defaultState = Immutable.fromJS({
  stage: 0,
  email: '',
  password: '',
  passwordConfirm: '',
});

export default function(state = defaultState, action) {

  console.log(action);

  switch (action.type) {
    case ActionType.NEXT_OSTAGE:
      const increment = state.get('stage') + 1;
      return state.set('stage', increment);
    case ActionType.BACK_OSTAGE:
      const decrement = state.get('stage') - 1;
      return state.set('stage', decrement);
    case ActionType.SET_EMAIL:
      return state.set('email', action.email);
    case ActionType.SET_PASSWORD:
      return state.set('password', action.password);
    case ActionType.SET_PASSWORD_CONFIRM:
      return state.set('passwordConfirm', action.passswordConfirm);
    default:
      return state;
  }
}
