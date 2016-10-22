import Immutable from 'immutable';
import * as ActionType from '../actions/goals';

const defaultState = Immutable.fromJS({
  goalState: 0,
  goalName: '',
  goalCost: '',
  goalDate: '',
  saveAmount: '',
});

export default function (state = defaultState, action) {
  let updatedGoalState;
  switch (action.type) {
    case ActionType.ADVANCE_GOAL_STATE:
      updatedGoalState = state.get('goalState') + 1;
      return state.set('goalState', updatedGoalState);
    case ActionType.BACK_GOAL_STATE:
      updatedGoalState = state.get('goalState') - 1;
      return state.set('goalState', updatedGoalState);
    case ActionType.RESET_GOAL_STATE:
      return state.set('goalState', 0);
    case ActionType.SET_GOAL_NAME:
      return state.set('goalName', action.name);
    case ActionType.SET_GOAL_COST:
      return state.set('goalCost', action.cost);
    case ActionType.SET_GOAL_DATE:
      return state.set('goalDate', action.date);
    case ActionType.SET_SAVE_AMOUNT:
      return state.set('saveAmount', action.amount);
    default:
      return state;
  }
}
