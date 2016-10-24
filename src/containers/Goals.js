import { connect } from 'react-redux';
import Goals from '../components/main/Goals';

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

export default connect(mapStateToProps)(Goals);
