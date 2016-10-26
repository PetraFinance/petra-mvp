import { connect } from 'react-redux';
import { updateSavedAmount } from '../../actions/goals';
import Goals from '../../components/goals/Goals';

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
  updateSavedAmount: (key, updated) => {
    dispatch(updateSavedAmount(key, updated));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
