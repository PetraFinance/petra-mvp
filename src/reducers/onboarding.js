import Immutable from 'immutable';
import * as ActionType from '../actions/onboarding';

const defaultState = Immutable.fromJS({
  stage: 0,
  email: '',
  password: '',
  passwordConfirm: '',
  searchBankOnboarding: '',
  bank: '',
  bankUsername: '',
  bankPassword: '',
});

export default function (state = defaultState, action) {
  let increment;
  let decrement;
  switch (action.type) {
    case ActionType.NEXT_OSTAGE:
      increment = state.get('stage') + 1;
      return state.set('stage', increment);
    case ActionType.BACK_OSTAGE:
      decrement = state.get('stage') - 1;
      return state.set('stage', decrement);
    case ActionType.SET_EMAIL:
      return state.set('email', action.email);
    case ActionType.SET_PASSWORD:
      return state.set('password', action.password);
    case ActionType.SET_PASSWORD_CONFIRM:
      return state.set('passwordConfirm', action.passwordConfirm);
    case ActionType.SET_SEARCH_BANK_ONBOARDING:
      return state.set('searchBankOnboarding', action.searchBankOnboarding);
    case ActionType.SET_BANK:
      return state.set('bank', action.bank);
    case ActionType.SET_BANK_USERNAME:
      return state.set('bankUsername', action.bankUsername);
    case ActionType.SET_BANK_PASSWORD:
      return state.set('bankPassword', action.bankPassword);
    default:
      return state;
  }
}
