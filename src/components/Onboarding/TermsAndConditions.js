import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Actions } from 'react-native-redux-router';

class OnboardTermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={s.page}>
        <View style={s.container}>

          <View style={s.intro}>
            <Text style={s.welcome}>Terms &amp; Conditions</Text>
            <Text style={s.desc}>aesthetically appealing one-liner</Text>
          </View>
        </View>
        <View style={s.continue}>
          <Text
            style={s.continueText}
          >
            ACCEPT
          </Text>
        </View>

      </View>
    );
  }
}

const s = StyleSheet.create({
  page: {
    flex: 1,
  },
  containers: {
    flex: 1,
  },
  intro: {
    flex: 0.75,
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
  continue: {
    height: 50,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#0FA0EA',
  },
  continueText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  }
});

export default OnboardTermsAndConditions;
