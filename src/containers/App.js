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

import Landing from '../components/main/Landing';

import BackButton from './partials/BackButton';
import Navigation from '../components/main/Navigation';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 } }>
          <ProgressBar/>

          <Router>
            <Schema name="onboarding" sceneConfig={Animations.FlatFloatFromRight} navBar={BackButton}/>
            <Schema name="default"/>

            <Route
              name="appLanding"
              component={Landing}
              hideNavBar={true}
              title="App Landing"
            />
            <Route name="onboardLaunch"
              component={OnboardLanding}
              schema="onboarding"
              initial={true}
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
