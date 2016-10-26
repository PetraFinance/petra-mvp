import { connect } from 'react-redux';
import { addGoal, advanceGoalState, backGoalState, resetGoalState, setGoalName, setGoalCost, setGoalDate, setSaveAmount } from '../../actions/goals';
import AddDueDate from '../../components/goals/AddDueDate';

const mapStateToProps = (state) => {
  const cpState = state.goals.toJS();
  const goalDate = cpState.goalDate;

  return Object.assign({},
    state.goals.toJS(),
    {
      goalDate,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleGoalDate: (date) => {
    dispatch(setGoalDate(date));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDueDate);
