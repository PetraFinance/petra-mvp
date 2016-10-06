import React from 'react';
import { View, Navigator } from 'react-native';
import { Router, Scene, Schema } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from '../store/store';

import OnboardLanding from '../components/onboarding/Landing';
import OnboardAccountCreation from './onboarding/AccountCreation';
import OnboardTermsAndConditions from './onboarding/TermsAndConditions';

import Overview from './main/Overview';
import AddAccount from '../components/main/AddAccount';

import Funds from './main/Funds';
import FundOverview from './main/FundOverview';
import FundAdjust from '../components/main/FundAdjust';

import Transactions from '../components/main/Transactions';
import Learn from '../components/main/Learn';
import Settings from '../components/main/Settings';

import StatusBarLight from '../components/partials/StatusBarLight';
import StatusBarDark from '../components/partials/StatusBarDark';
import BackButton from './partials/BackButton';

const store = configureStore();

// The current routing package is only used for routing
// We use our own navigation components and tab bar

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="Root">
            <Scene
              key="overview"
              component={Overview}
              type="replace"
              hideNavBar
            />
            <Scene
              key="addAccount"
              component={AddAccount}
              hideNavBar
            />
            <Scene
              key="funds"
              component={Funds}
              type="replace"
              hideNavBar
            />
            <Scene
              key="fundPreview"
              component={FundOverview}
              hideNavBar
            />
            <Scene
              key="fundAdjust"
              component={FundAdjust}
              hideNavBar
            />
            <Scene
              key="transactions"
              component={Transactions}
              type="replace"
              hideNavBar
            />
            <Scene
              key="learn"
              component={Learn}
              type="replace"
              hideNavBar
            />
            <Scene
              key="settings"
              component={Settings}
              type="replace"
              hideNavBar
            />
            <Scene
              key="onboardLaunch"
              component={OnboardLanding}
              hideNavBar
              initial
            />
            <Scene
              key="accountCreation"
              component={OnboardAccountCreation}
              hideNavBar
            />
            <Scene
              key="termsAndConditions"
              component={OnboardTermsAndConditions}
              hideNavBar
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
