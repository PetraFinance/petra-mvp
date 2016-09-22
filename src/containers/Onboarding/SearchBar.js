import { connect } from 'react-redux';
import { setOnboardSearchBanks} from '../../actions/onboarding';
import SearchBar from '../../components/Onboarding/SearchBar';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const onboardSearchBanks = cpState.onboardSearchBanks;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      onboardSearchBanks
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleSearchBanks(searchTerm) {
    dispatch(setOnboardSearchBanks(searchTerm));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
