import { connect } from 'react-redux';
import { addGoal, resetGoalAdd, setSaveAmount } from '../../actions/goals';
import AddSaveAmount from '../../components/goals/AddSaveAmount';

const mapStateToProps = (state) => {
  const cpState = state.goals.toJS();
  const saveAmount = cpState.saveAmount;

  return Object.assign({},
    state.goals.toJS(),
    {
      saveAmount,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleAddGoal: (name, date, cost, save) => {
    dispatch(addGoal(name, date, cost, save));
  },
  resetGoalAdd: () => {
    dispatch(resetGoalAdd());
  },
  handleSaveAmount: (amount) => {
    dispatch(setSaveAmount(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSaveAmount);
