import { connect } from 'react-redux';
import ProgressBar from '../../components/Onboarding/ProgressBar';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const stage = cpState.stage;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      stage,
    }
  );
};

export default connect(mapStateToProps)(ProgressBar);
