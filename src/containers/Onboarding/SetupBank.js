import { connect } from 'react-redux';
import SetupBank from '../../components/Onboarding/SetupBank';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const bank = cpState.bank;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      bank,
    }
  );
};

export default connect(mapStateToProps)(SetupBank);
