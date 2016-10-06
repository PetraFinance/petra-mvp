import { connect } from 'react-redux';
import FundOverview from '../../components/main/FundOverview';

const mapStateToProps = (state) => {
  const cpState = state.funds.toJS();
  const fundPreviewName = cpState.fundPreviewName;

  return Object.assign({},
    state.funds.toJS(),
    {
      fundPreviewName,
    }
  );
};

export default connect(mapStateToProps)(FundOverview);
