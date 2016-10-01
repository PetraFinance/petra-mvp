import Immutable from 'immutable';
import * as ActionType from '../actions/onboarding';

const defaultState = Immutable.fromJS({
  showOverviewTip: false,
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.HIDE_OVERVIEW_TIP:
      return state.set('showOverviewTip', false);
    case ActionType.SHOW_OVERVIEW_TIP:
      return state.set('showOverviewTip', true);
    default:
      return state;
  }
}
