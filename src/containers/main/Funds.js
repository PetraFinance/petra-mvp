import { connect } from 'react-redux';
import { setFundPreviewName } from '../../actions/funds';
import Funds from '../../components/main/Funds';

const mapStateToProps = (state) => {
  return Object.assign({},
    state.funds.toJS(), {}
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFundPreviewName: (fundPreviewName) => {
    dispatch(setFundPreviewName(fundPreviewName));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Funds);
