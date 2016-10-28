import { connect } from 'react-redux';
import { updateGoal, setGoalName } from '../../actions/goals';
import GoalsEdit from '../../components/goals/GoalsEdit';

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
  handleUpdateGoal: (id, field, value) => {
    dispatch(updateGoal(id, field, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsEdit);
