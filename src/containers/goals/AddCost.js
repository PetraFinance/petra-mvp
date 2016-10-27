import { connect } from 'react-redux';
import { setGoalCost } from '../../actions/goals';
import AddCost from '../../components/goals/AddCost';

const mapStateToProps = (state) => {
  const cpState = state.goals.toJS();
  const goalCost = cpState.goalCost;

  return Object.assign({},
    state.goals.toJS(),
    {
      goalCost,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleGoalCost: (cost) => {
    dispatch(setGoalCost(cost));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCost);
