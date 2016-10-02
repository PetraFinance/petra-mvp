import React from 'react';
import { Router, Route, Animations, Schema } from 'react-native-redux-router';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/store';

import OnboardLanding from '../components/onboarding/Landing';
import OnboardProfileOverview from './onboarding/ProfileOverview';
import OnboardTermsAndConditions from './onboarding/TermsAndConditions';
import OnboardAccountCreation from './onboarding/AccountCreation';
import OnboardSelectBank from './onboarding/SelectBank';
import OnboardSetupBank from './onboarding/SetupBank';

import Overview from './main/Overview';
import AddAccount from '../components/main/AddAccount';
import Funds from '../components/main/Funds';
import Transactions from '../components/main/Transactions';
import Learn from '../components/main/Learn';
import Settings from '../components/main/Settings';

import StatusBarLight from '../components/partials/StatusBarLight';
import StatusBarDark from '../components/partials/StatusBarDark';
import BackButton from './partials/BackButton';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router>
            <Schema
              name="onboarding"
              sceneConfig={Animations.FlatFloatFromBottom}
              navBar={BackButton}
            />
            <Schema
              name="pop-up"
              sceneConfig={Animations.FlatFloatFromBottom}
              navBar={StatusBarLight}
            />
            <Schema
              name="default"
              navBar={StatusBarDark}
            />

            <Route
              name="overview"
              component={Overview}
              initial
              title="Overview"
              parent="Overview"
            />
            <Route
              name="addAccount"
              component={AddAccount}
              showBottomNavBar={false}
              schema="pop-up"
              title="Add an Account"
              parent="Overview"
            />
            <Route
              name="funds"
              component={Funds}
              title="Funds"
              parent="Funds"
            />
            <Route
              name="transactions"
              component={Transactions}
              title="Transactions"
              parent="Transactions"
            />
            <Route
              name="learn"
              component={Learn}
              title="Learn"
              parent="Learn"
            />
            <Route
              name="settings"
              component={Settings}
              title="Settings"
              parent="Settings"
            />
            <Route name="onboardLaunch"
              component={OnboardLanding}
              schema="onboarding"
              hideNavBar
              title="Launch"
            />
            <Route
              name="accountCreation"
              component={OnboardAccountCreation}
              schema="onboarding"
              title="Account Creation"
            />
            <Route
              name="termsAndConditions"
              component={OnboardTermsAndConditions}
              schema="onboarding"
              title="Terms and Conditions"
            />
            <Route
              name="selectBanking"
              component={OnboardSelectBank}
              schema="onboarding"
              title="Select Banking"
            />
            <Route
              name="setupBanking"
              component={OnboardSetupBank}
              schema="onboarding"
              title="Setup Banking"
            />
            <Route
              name="profileOverview"
              component={OnboardProfileOverview}
              schema="onboarding"
              title="Profile Overview"
            />
          </Router>
        </View>
      </Provider>
    );
  }
}

export default App;
