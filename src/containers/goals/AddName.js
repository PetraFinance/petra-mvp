import { connect } from 'react-redux';
import { resetGoalAdd, setGoalName } from '../../actions/goals';
import AddName from '../../components/goals/AddName';

const mapStateToProps = (state) => {
  const cpState = state.goals.toJS();
  const goalName = cpState.goalName;

  return Object.assign({},
    state.goals.toJS(),
    {
      goalName,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetGoalAdd: () => {
    dispatch(resetGoalAdd());
  },
  handleGoalName: (name) => {
    dispatch(setGoalName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddName);
