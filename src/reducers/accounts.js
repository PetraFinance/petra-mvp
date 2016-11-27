import Immutable from 'immutable';
import * as ActionType from '../actions/accounts';
import { capitalizeFirstLetter } from '../helpers/formatting';

const defaultState = Immutable.fromJS({
  bankList: [],
  creditList: [],
  accountData: {},
  transactionsList: [],
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.SET_ACCOUNT_DATA:
      const transactionsList = Immutable.List(action.data["data"]["transactions"]);
      let bankList = Immutable.List();
      let creditList = Immutable.List();
      const bankAccounts = action.data["data"]["accounts"].filter( account => (account.type === "depository"));
      const creditAccounts = action.data["data"]["accounts"].filter( account => (account.type === "credit"));
      for (const account of bankAccounts) {
        const subtype = capitalizeFirstLetter(account.subtype);
        const entry = Immutable.Map({
          account_id: account._id,
          name: account.meta.name,
          balance: account.balance.available,
          type: subtype,
        });
        bankList = bankList.push(entry);
      }
      for (const account of creditAccounts) {
        const type = capitalizeFirstLetter(account.type);
        const entry = Immutable.Map({
          account_id: account._id,
          name: account.meta.name,
          balance: account.balance.current,
          type,
        });
        creditList = creditList.push(entry);
      }
      return state.set('bankList', bankList)
                  .set('creditList', creditList)
                  .set('transactionsList', transactionsList);
    default:
      return state;
  }
}
