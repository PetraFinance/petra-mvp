import { connect } from 'react-redux';
import BackButton from '../../components/partials/BackButton';
import { handleBack } from '../../actions/onboarding';

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

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => {
    dispatch(handleBack());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BackButton);
