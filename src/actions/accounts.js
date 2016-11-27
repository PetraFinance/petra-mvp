import Symbol from 'es6-symbol';

export const SET_ACCOUNT_DATA = Symbol('SET_ACCOUNT_DATA');
export function setAccountData(data) {
  return {
    type: SET_ACCOUNT_DATA,
    data,
  };
}

export const SET_AUTH_TOKEN = Symbol('SET_AUTH_TOKEN');
export function setAuthToken(token) {
  return {
    type: SET_AUTH_TOKEN,
    token,
  };
}
