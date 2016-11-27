import Symbol from 'es6-symbol';

export const SET_ACCOUNT_DATA = Symbol('SET_ACCOUNT_DATA');
export function setAccountData(data) {
  return {
    type: SET_ACCOUNT_DATA,
    data,
  };
}
