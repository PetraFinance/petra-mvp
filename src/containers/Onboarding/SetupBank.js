import { connect } from 'react-redux';
import SetupBank from '../../components/onboarding/SetupBank';
import { setBankUsername, setBankPassword } from '../../actions/onboarding';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const bankUsername = cpState.bankUsername;
  const bankPassword = cpState.bankPassword;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      bankUsername,
      bankPassword,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBankUsername: (bankUsername) => {
    dispatch(setBankUsername(bankUsername));
  },
  handleBankPassword: (bankPassword) => {
    dispatch(setBankPassword(bankPassword));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupBank);
