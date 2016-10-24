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

export const ADVANCE_GOAL_STATE = Symbol('ADVANCE_GOAL_STATE');
export function advanceGoalState() {
  return {
    type: ADVANCE_GOAL_STATE,
  };
}

export const BACK_GOAL_STATE = Symbol('BACK_GOAL_STATE');
export function backGoalState() {
  return {
    type: BACK_GOAL_STATE,
  };
}


export const RESET_GOAL_STATE = Symbol('RESET_GOAL_STATE');
export function resetGoalState() {
  return {
    type: RESET_GOAL_STATE,
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
