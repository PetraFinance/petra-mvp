import Symbol from 'es6-symbol';

export const SET_GOAL_COMPLETED = Symbol('SET_GOAL_COMPLETED');
export function setGoalCompleted(id) {
  return {
    type: SET_GOAL_COMPLETED,
    id,
  };
}

export const UPDATE_GOAL = Symbol('UPDATE_GOAL');
export function updateGoal(id, field, value) {
  return {
    type: UPDATE_GOAL,
    id,
    field,
    value,
  };
}

export const REMOVE_GOAL = Symbol('REMOVE_GOAL');
export function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}

export const UPDATE_SAVED_AMOUNT = Symbol('UPDATE_SAVED_AMOUNT');
export function updateSavedAmount(id, updated) {
  return {
    type: UPDATE_SAVED_AMOUNT,
    id,
    updated,
  };
}

export const ADD_GOAL = Symbol('ADD_GOAL');
export function addGoal(name, date, cost, save) {
  return {
    type: ADD_GOAL,
    name,
    date,
    cost,
    save,
  };
}

export const RESET_ADD_GOAL = Symbol('RESET_ADD_GOAL');
export function resetGoalAdd() {
  return {
    type: RESET_ADD_GOAL,
  };
}

export const SET_GOAL_NAME = Symbol('SET_GOAL_NAME');
export function setGoalName(name) {
  return {
    type: SET_GOAL_NAME,
    name,
  };
}

export const SET_GOAL_COST = Symbol('SET_GOAL_COST');
export function setGoalCost(cost) {
  return {
    type: SET_GOAL_COST,
    cost,
  };
}


export const SET_GOAL_DATE = Symbol('SET_GOAL_DATE');
export function setGoalDate(date) {
  return {
    type: SET_GOAL_DATE,
    date,
  };
}

export const SET_SAVE_AMOUNT = Symbol('SET_SAVE_AMOUNT');
export function setSaveAmount(amount) {
  return {
    type: SET_SAVE_AMOUNT,
    amount,
  };
}
