import { connect } from 'react-redux';
import AddAccount from '../../components/overview/AddAccount';
import { setAccountData } from '../../actions/accounts';

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
    console.log("Made it here!!");
    console.log("MEMES");
    dispatch(setAccountData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAccount);
