import { connect } from 'react-redux';
import AccountCreation from '../../components/Onboarding/AccountCreation';
import { handleAdvance } from '../../actions/onboarding';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const stage = cpState.stage;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      stage
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleAdvance: () => {
    dispatch(handleAdvance());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountCreation);
