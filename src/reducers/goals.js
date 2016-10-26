import Immutable from 'immutable';
import * as ActionType from '../actions/goals';
import { MonetaryStrToInt } from '../helpers/currency';

const defaultState = Immutable.fromJS({
  nextAvaliableId: 0,
  goalsList: {},
  goalName: '',
  goalCost: '',
  goalDate: '',
  saveAmount: '',
});

export default function (state = defaultState, action) {
  let goalsList;
  let goal;
  let id;
  let idString;
  let updatedId;
  let updatedGoalsList;
  switch (action.type) {
    case ActionType.SET_GOAL_COMPLETED:
      return state.setIn(['goalsList', action.id, 'completed'], true);
    case ActionType.REMOVE_GOAL:
      return state.deleteIn(['goalsList', action.id]);
    case ActionType.UPDATE_SAVED_AMOUNT:
      return state.setIn(['goalsList', action.id, 'currentSaved'], action.updated);
    case ActionType.ADD_GOAL:
      id = state.get('nextAvaliableId');
      idString = id.toString();
      updatedGoalsList = state.get('goalsList');
      let temp = Immutable.Map({
        'name': action.name,
        'date': action.date,
        'cost': MonetaryStrToInt(action.cost),
        'saveAmount': MonetaryStrToInt(action.save),
        'currentSaved': 0,
        'done': false,
      });
      goal = Immutable.Map([[idString, temp]]);
      updatedGoalsList = updatedGoalsList.merge(goal);
      updatedId = id + 1;
      return state.set('goalsList', updatedGoalsList)
                  .set('nextAvaliableId', updatedId);
    case ActionType.RESET_GOAL_STATE:
      return state.set('goalName', '')
                  .set('goalCost', '')
                  .set('goalDate', '')
                  .set('saveAmount', '');
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
