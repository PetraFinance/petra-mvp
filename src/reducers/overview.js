import Immutable from 'immutable';
import * as ActionType from '../actions/goals';

const defaultState = Immutable.fromJS({
  bankList: [
    {
      'name': 'Bank of America',
      'balance': "12456",
      'type': 'Core Checking',
    },
  ]
});

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
