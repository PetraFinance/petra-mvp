import { connect } from 'react-redux';
import { addGoal, advanceGoalState, backGoalState, resetGoalState, setGoalName, setGoalCost, setGoalDate, setSaveAmount } from '../actions/goals';
import GoalsAdd from '../components/main/GoalsAdd';

const mapStateToProps = (state) => {
  const cpState = state.goals.toJS();
  const goalsList = cpState.goalsList;
  const goalState = cpState.goalState;
  const goalName = cpState.goalName;
  const goalCost = cpState.goalCost;
  const goalDate = cpState.goalDate;
  const saveAmount = cpState.saveAmount;

  return Object.assign({},
    state.goals.toJS(),
    {
      goalsList,
      goalState,
      goalName,
      goalCost,
      goalDate,
      saveAmount,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleAddGoal: (name, date, cost, save) => {
    dispatch(addGoal(name, date, cost, save));
  },
  handleAdvanceGoalState: () => {
    dispatch(advanceGoalState());
  },
  handleBackGoalState: () => {
    dispatch(backGoalState());
  },
  resetGoalState: () => {
    dispatch(resetGoalState());
  },
  handleGoalName: (name) => {
    dispatch(setGoalName(name));
  },
  handleGoalCost: (cost) => {
    dispatch(setGoalCost(cost));
  },
  handleGoalDate: (date) => {
    dispatch(setGoalDate(date));
  },
  handleSaveAmount: (amount) => {
    dispatch(setSaveAmount(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsAdd);
