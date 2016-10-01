import { connect } from 'react-redux';
import Overview from '../../components/main/Overview';
import { showOverviewTip, hideOverviewTip } from '../../actions/overview';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();

  return Object.assign({},
    state.onboarding.toJS(),
    {

    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  showOverviewTip: () => {
    dispatch(showOverviewTip());
  },
  hideOverviewTip: () => {
    dispatch(hideOverviewTip());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
