import { connect } from 'react-redux';
import Overview from '../../components/main/Overview';
import { showOverviewTip, hideOverviewTip } from '../../actions/overview';

const mapDispatchToProps = (dispatch) => ({
  showOverviewTip: () => {
    dispatch(showOverviewTip());
  },
  hideOverviewTip: () => {
    dispatch(hideOverviewTip());
  },
});

export default connect(mapDispatchToProps)(Overview);
