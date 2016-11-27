import { connect } from 'react-redux';
import TransactionList from '../../components/overview/TransactionsList';

const mapStateToProps = (state) => {
  const cpState = state.accounts.toJS();
  const transactionsList = cpState.transactionsList;

  return Object.assign({},
    state.accounts.toJS(),
    {
      transactionsList,
    }
  );
};

export default connect(mapStateToProps)(TransactionList);
