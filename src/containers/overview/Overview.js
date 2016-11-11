import { connect } from 'react-redux';
import Overview from '../../components/overview/Overview';

const mapStateToProps = (state) => {
  const cpState = state.overview.toJS();
  const bankList = cpState.bankList;

  return Object.assign({},
    state.overview.toJS(),
    {
      bankList,
    }
  );
};

export default connect(mapStateToProps)(Overview);
