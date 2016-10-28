import Immutable from 'immutable';
import * as ActionType from '../actions/goals';
import { MonetaryStrToInt } from '../helpers/currency';

// goalsMap: {
//   '0': {
//     'id': '0',
//     'name': 'Test',
//     'date': 'Soon',
//     'cost': 500,
//     'saveAmount': 100,
//     'currentSaved': 0,
//     'done': false,
//   }
// }

const defaultState = Immutable.fromJS({
  nextAvaliableId: 2,
  goalsMap: {
    '0': {
      'name': 'Test',
      'date': 'Soon',
      'cost': 500,
      'saveAmount': 100,
      'currentSaved': 0,
      'completed': false,
    },
    '1': {
      'name': 'Test',
      'date': 'Soon',
      'cost': 500,
      'saveAmount': 100,
      'currentSaved': 0,
      'completed': false,
    },
  },
  goalName: '',
  goalCost: '',
  goalDate: '',
  saveAmount: '',
});

export default function (state = defaultState, action) {
  let goalsMap;
  let goal;
  let id;
  let idString;
  let updatedId;
  let updatedgoalsMap;
  switch (action.type) {
    case ActionType.UPDATE_GOAL:
      return state.setIn(['goalsMap', action.id, action.field], action.value);
    case ActionType.SET_GOAL_COMPLETED:
      return state.setIn(['goalsMap', action.id, 'completed'], true);
    case ActionType.REMOVE_GOAL:
      return state.deleteIn(['goalsMap', action.id]);
    case ActionType.UPDATE_SAVED_AMOUNT:
      let cost = state.get('goalsMap').get(action.id).get('cost');
      return state.setIn(['goalsMap', action.id, 'currentSaved'], action.updated);
    case ActionType.ADD_GOAL:
      id = state.get('nextAvaliableId');
      idString = id.toString();
      updatedId = id + 1;
      let temp = Immutable.Map({
        'name': action.name,
        'date': action.date,
        'cost': MonetaryStrToInt(action.cost),
        'saveAmount': MonetaryStrToInt(action.save),
        'currentSaved': 0,
        'completed': false,
      });
      goal = Immutable.Map([[idString, temp]]);
      return state.mergeIn(['goalsMap'], goal)
                  .set('nextAvaliableId', updatedId);
    case ActionType.RESET_ADD_GOAL:
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
