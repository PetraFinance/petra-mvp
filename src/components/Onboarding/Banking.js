import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/AdvanceButton'

class OnboardBanking extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let banner = require("../../../assets/logo.png");

    return (
      <View style={s.page}>
        <View style={s.container}>
          <View style={s.intro}>
            <Text style={s.welcome}>Link your bank</Text>
            <Text style={s.desc}>this is how babies are made</Text>
          </View>
        </View>
        <AdvanceButton
          text={ "CONTINUE" }
          pressAction={ Actions.accountCreation }
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
  },
  intro: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    marginBottom: 2,
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  desc: {
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
});

export default OnboardBanking;
