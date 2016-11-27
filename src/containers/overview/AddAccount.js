import { connect } from 'react-redux';
import AddAccount from '../../components/overview/AddAccount';
import { setAccountData, setAuthToken } from '../../actions/accounts';

const mapStateToProps = (state) => {
  const cpState = state.accounts.toJS();
  const bankList = cpState.bankList;

  return Object.assign({},
    state.accounts.toJS(),
    {
      bankList,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleAccountData: (data) => {
    dispatch(setAccountData(data));
  },
  handleAuthToken: (token) => {
    dispatch(setAuthToken(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAccount);
