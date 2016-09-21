import Immutable from 'immutable';
import * as ActionType from '../actions/onboarding';

const defaultState = Immutable.fromJS({
  stage: 0,
});

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionType.NEXT_OSTAGE:
      const increment = state.get('stage') + 1;
      return state.set('stage', increment);
    case ActionType.BACK_OSTAGE:
      const decrement = state.get('stage') - 1;
      return state.set('stage', decrement);
    default:
      return state;
  }
}
