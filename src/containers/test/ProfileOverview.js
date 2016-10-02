import { connect } from 'react-redux';
import ProfileOverview from '../../components/onboarding/ProfileOverview';
import { handleFinishOnboarding } from '../../actions/onboarding';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const finishedOnboarding = cpState.finishedOnboarding;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      finishedOnboarding,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleFinishOnboarding: () => {
    dispatch(handleFinishOnboarding());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOverview);
