import { connect } from 'react-redux';
import ProgressBar from '../../components/onboarding/ProgressBar';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const stage = cpState.stage;
  const finishedOnboarding = cpState.finishedOnboarding;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      stage,
      finishedOnboarding,
    }
  );
};

export default connect(mapStateToProps)(ProgressBar);
