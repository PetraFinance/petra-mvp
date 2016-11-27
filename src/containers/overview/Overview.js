import { connect } from 'react-redux';
import Overview from '../../components/overview/Overview';

const mapStateToProps = (state) => {
  const cpState = state.accounts.toJS();
  const bankList = cpState.bankList;
  const creditList = cpState.creditList;
  const transactionList = cpState.transactionList;

  return Object.assign({},
    state.accounts.toJS(),
    {
      bankList,
      creditList,
      transactionList,
    }
  );
};

export default connect(mapStateToProps)(Overview);
