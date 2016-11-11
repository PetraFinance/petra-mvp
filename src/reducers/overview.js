import Immutable from 'immutable';
import * as ActionType from '../actions/goals';

const defaultState = Immutable.fromJS({
  bankList: [
    {
      'name': 'Bank of America',
      'balance': "12456",
      'type': 'Core Checking',
    },
    {
      'name': 'Bank of America',
      'balance': "43123",
      'type': 'Core Savings',
    },
    {
      'name': 'Wells Fargo',
      'balance': "342",
      'type': 'Meme Fund',
    },
  ]
});

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
