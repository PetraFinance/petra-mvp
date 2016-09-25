import { connect } from 'react-redux';
import SearchBar from '../../components/partials/SearchBar';
import { setSearchBankOnboarding } from '../../actions/onboarding';


const mapStateToProps = (state) => {
  const cpState = state.onboarding.toJS();
  const searchBankOnboarding = cpState.searchBankOnboarding;

  return Object.assign({},
    state.onboarding.toJS(),
    {
      searchBankOnboarding,
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleSearchBankOnboarding(searchTerm) {
    dispatch(setSearchBankOnboarding(searchTerm));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
