import { connect } from 'react-redux';
import { updateGoal } from '../../actions/goals';
import GoalsEdit from '../../components/goals/GoalsEdit';

const mapStateToProps = (state) => {
  const cpState = state.goals.toJS();
  const goalsList = cpState.goalsList;
  return Object.assign({},
    state.goals.toJS(),
    {
      goalsList,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleUpdateGoal: (id, field, value) => {
    dispatch(updateGoal(id, field, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsEdit);
