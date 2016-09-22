import React, { Component } from "react";
import { Router, Route, Container, Animations, Schema } from "react-native-redux-router";
import { View } from 'react-native';
import { Provider } from "react-redux";
import configureStore from "../store/store";

import OnboardLanding from "../components/Onboarding/Landing";
import OnboardBanking from "../components/Onboarding/Banking";
import OnboardAccountCreation from "../containers/Onboarding/AccountCreation";
import OnboardTermsAndConditions from "../containers/Onboarding/TermsAndConditions";
import ProgressBar from './Onboarding/ProgressBar';
import BackButton from '../containers/BackButton';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <ProgressBar/>
          <Router>
            <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={BackButton}/>

            <Route name="launch" component={OnboardLanding} initial={true} hideNavBar={true} title="Launch"/>
            <Route name="accountCreation" component={OnboardAccountCreation} title="Account Creation"/>
            <Route name="termsAndConditions" component={OnboardTermsAndConditions} title="Terms and Conditions"/>
            <Route name="banking" component={OnboardBanking} title="Banking"/>
          </Router>
        </View>
      </Provider>
    );
  }
}


export default App;
