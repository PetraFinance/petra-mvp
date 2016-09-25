import React from 'react';
import { Router, Route, Animations, Schema } from 'react-native-redux-router';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/store';

import OnboardLanding from '../components/onboarding/Landing';

import OnboardTermsAndConditions from './onboarding/TermsAndConditions';
import OnboardAccountCreation from './onboarding/AccountCreation';
import OnboardSelectBank from './onboarding/SelectBank';
import OnboardSetupBank from './onboarding/SetupBank';
import ProgressBar from './onboarding/ProgressBar';

import Landing from '../components/main/Landing';

import BackButton from './partials/BackButton';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 } }>
          <ProgressBar/>
          <Router>
            <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={BackButton}/>

            <Route name="onboardLaunch" component={OnboardLanding} initial={true} hideNavBar={true} title="Launch"/>
            <Route name="accountCreation" component={OnboardAccountCreation} title="Account Creation"/>
            <Route name="termsAndConditions" component={OnboardTermsAndConditions} title="Terms and Conditions"/>
            <Route name="selectBanking" component={OnboardSelectBank} title="Select Banking"/>
            <Route name="setupBanking" component={OnboardSetupBank} title="Setup Banking"/>

            <Route name="appLanding" component={Landing} hideNavBar={true} title="App Landing"/>
          </Router>
        </View>
      </Provider>
    );
  }
}

export default App;
