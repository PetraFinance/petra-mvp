import { connect } from 'react-redux';
import SelectBank from '../../components/onboarding/SelectBank';
import { handleAdvance, setBank } from '../../actions/onboarding';

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
  handleAdvance: () => {
    dispatch(handleAdvance());
  },
  handleSelectBank: (bank) => {
    dispatch(setBank(bank));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectBank);
