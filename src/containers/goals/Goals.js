import { connect } from 'react-redux';
import { updateSavedAmount, setGoalCompleted, removeGoal } from '../../actions/goals';
import Goals from '../../components/goals/Goals';

const mapStateToProps = (state) => {
  const cpState = state.goals.toJS();
  const goalsMap = cpState.goalsMap;

  return Object.assign({},
    state.goals.toJS(),
    {
      goalsMap,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateSavedAmount: (key, updated) => {
    dispatch(updateSavedAmount(key, updated));
  },
  setGoalCompleted: (key) => {
    dispatch(setGoalCompleted(key));
  },
  handleRemoveGoal: (key) => {
    dispatch(removeGoal(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
