export const NEXT_OSTAGE = Symbol('NEXT_OSTAGE');
export function handleAdvance() {
  return {
    type: NEXT_OSTAGE,
  };
}

export const BACK_OSTAGE = Symbol('BACK_OSTAGE');
export function handleBack() {
  return {
    type: BACK_OSTAGE,
  };
}

export const SET_EMAIL = Symbol('SET_EMAIL');
export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email,
  };
}

export const SET_PASSWORD = Symbol('SET_PASSWORD');
export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password,
  };
}

export const SET_SEARCH_BANK_ONBOARDING = Symbol('SET_SEARCH_BANK_ONBOARDING');
export function setSearchBankOnboarding(searchBankOnboarding) {
  return {
    type: SET_SEARCH_BANK_ONBOARDING,
    searchBankOnboarding,
  };
}

export const SET_PASSWORD_CONFIRM = Symbol('SET_PASSWORD_CONFIRM');
export function setPasswordConfirm(passwordConfirm) {
  return {
    type: SET_PASSWORD_CONFIRM,
    passwordConfirm,
  };
}
