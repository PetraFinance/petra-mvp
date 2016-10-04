import Immutable from 'immutable';
import * as ActionType from '../actions/funds';

const defaultState = Immutable.fromJS({
  fundPreviewName: '',
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.SET_FUND_PREVIEW:
      return state.set('fundPreviewName', action.fundPreviewName);
    default:
      return state;
  }
}
