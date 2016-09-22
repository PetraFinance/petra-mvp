import { connect } from 'react-redux';
import AccountCreation from '../../components/Onboarding/AccountCreation';
import { handleAdvance, setEmail, setPassword, setPasswordConfirm } from '../../actions/onboarding';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const stage = cpState.stage;
  const email = cpState.email;
  const password = cpState.password;
  const passwordConfirm = cpState.passwordConfirm;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      email,
      stage,
      passwordConfirm,
      password,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleAdvance: () => {
    dispatch(handleAdvance());
  },
  handleEmail: (email) => {
    dispatch(setEmail(email));
  },
  handlePassword: (password) => {
    dispatch(setPassword(password));
  },
  handlePasswordConfirm: (passwordConfirm) => {
    dispatch(setPasswordConfirm(passwordConfirm));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountCreation);
