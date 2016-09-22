export const NEXT_OSTAGE = Symbol('NEXT_OSTAGE');
export function handleAdvance() {
  return {
    type: NEXT_OSTAGE
  };
}

export const BACK_OSTAGE = Symbol('BACK_OSTAGE');
export function handleBack() {
  return {
    type: BACK_OSTAGE
  };
}

export const SET_EMAIL = Symbol('SET_EMAIL');
export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email
  };
}

export const SET_PASSWORD = Symbol('SET_PASSWORD');
export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password
  };
}

export const SET_ONBOARD_BANK_SEARCH = Symbol('SET_ONBOARD_BANK_SEARCH');
export function setOnboardSearchBanks(onboardBankSearch) {
  return {
    type: SET_ONBOARD_BANK_SEARCH,
    onboardBankSearch
  };
}

export const SET_PASSWORD_CONFIRM = Symbol('SET_PASSWORD_CONFIRM');
export function setPasswordConfirm(passwordConfirm) {
  return {
    type: SET_PASSWORD_CONFIRM,
    passwordConfirm
  };
}
