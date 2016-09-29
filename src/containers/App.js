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
import ProgressBar from './onboarding/ProgressBar';

import Overview from '../components/main/Overview';
import Funds from '../components/main/Funds';
import Transactions from '../components/main/Transactions';
import Learn from '../components/main/Learn';
import Settings from '../components/main/Settings';

import BackButton from './partials/BackButton';
import Navigation from '../components/main/Navigation';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: '#F9FAFC', }}>
          <ProgressBar/>

          <Router>
            <Schema name="onboarding" sceneConfig={Animations.FlatFloatFromRight} navBar={BackButton}/>
            <Schema name="default"/>

            <Route
              name="overview"
              component={Overview}
              initial={true}
              hideNavBar={true}
              title="Overview"
            />
            <Route
              name="funds"
              component={Funds}
              hideNavBar={true}
              title="Funds"
            />
            <Route
              name="transactions"
              component={Transactions}
              hideNavBar={true}
              title="Transactions"
            />
            <Route
              name="learn"
              component={Learn}
              hideNavBar={true}
              title="Learn"
            />
            <Route
              name="settings"
              component={Settings}
              hideNavBar={true}
              title="Settings"
            />

            <Route name="onboardLaunch"
              component={OnboardLanding}
              schema="onboarding"
              hideNavBar={true}
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
