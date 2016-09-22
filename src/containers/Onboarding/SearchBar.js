import { connect } from 'react-redux';
import { setSearchBankOnboarding } from '../../actions/onboarding';
import SearchBar from '../../components/Onboarding/SearchBar';

const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const searchBankOnboarding = cpState.onboardSearchBanks;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      searchBankOnboarding
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleSearchBankOnboarding(searchTerm) {
    dispatch(setSearchBankOnboarding(searchTerm));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
