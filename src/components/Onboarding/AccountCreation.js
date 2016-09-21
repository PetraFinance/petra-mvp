import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/AdvanceButton'

class OnboardAccountCreation extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdvance = this.handleAdvance.bind(this);
  }

  handleAdvance() {
    this.props.handleAdvance();
    Actions.termsAndConditions();
  }

  render() {

    let blurbImage = require("../../../assets/logo.png");

    return (
      <View style={s.page}>
        <View style={s.container}>

          <View style={s.intro}>
            <Text style={s.welcome}>Create your account {this.props.stage}</Text>
            <Text style={s.desc}>aesthetically appealing one-liner</Text>
          </View>
          <View style={s.fbLogin}>
            <Text style={s.fbLoginText}>Login with Facebook</Text>
          </View>
          <View style={s.separator}>
            <Text style={s.separatorText}>OR</Text>
          </View>

          <View style={s.form}>
            <View>
              <Text style={s.label}>E-mail Address</Text>
              <TextInput
                style={s.input}
                autoCapitalize={"none"}
                onSubmitEditing={() => {
                  this.refs.second.focus();
                }}
              />
            </View>
            <View>
              <Text style={s.label}>Password</Text>
              <TextInput
                ref={"second"}
                style={s.input}
                secureTextEntry={true}
                onSubmitEditing={() => {
                  this.refs.third.focus();
                }}
              />
            </View>
            <View>
              <Text style={s.label}>Confirm your password</Text>
              <TextInput
                ref={"third"}
                style={s.input}
                secureTextEntry={true}
                autoCapitalize={"none"}
              />
            </View>
          </View>

          <View style={s.checks}>
            <View style={s.check}>
              <View style={s.radioButton}></View>
              <Text style={s.radioButtonLabel}>Valid e-mail address</Text>
            </View>
            <View style={s.check}>
              <View style={s.radioButton}></View>
              <Text style={s.radioButtonLabel}>Password has a capital letter</Text>
            </View>
            <View style={s.check}>
              <View style={s.radioButton}></View>
              <Text style={s.radioButtonLabel}>Password has a number</Text>
            </View>
          </View>

          <View style={s.blurb}>
            <Image
              source={ blurbImage }
              style={s.blurbImage}
            />
            <Text style={s.blurbText}>So baby pull me closer in the backseat of your Rover that I know you can’t afford bite that tattoo on your shoulder</Text>
          </View>

        </View>

        <AdvanceButton
          text={ "CREATE ACCOUNT" }
          pressAction={ Actions.termsAndConditions }
        />

      </View>
    );
  }
}

const s = StyleSheet.create({
  blurb: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  blurbImage: {
    marginRight: 25,
    height: 50,
    width: 50,
  },
  blurbText: {
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 12,
    flexWrap: 'wrap'
  },
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
  },
  form: {
    flex: 2.2,
  },
  checks: {
    flex: 0.75,
    flexDirection: "column",
    justifyContent: 'flex-start',
  },
  check: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    width: 10,
    height: 10,
    marginRight: 5,
    backgroundColor: '#0FA0EA',
  },
  radioButtonLabel: {
    fontFamily: 'Avenir',
    fontSize: 12
  },
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
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
  fbLogin: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#0FA0EA',
  },
  fbLoginText: {
    fontFamily: 'Avenir',
    color: 'white',
  },
  separator: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  separatorText: {
    fontFamily: 'Avenir',
  },
  label: {
    fontFamily: 'Avenir',
    fontSize: 12,
  },
  input: {
    height: 30,
    marginTop: 5,
    marginBottom: 15,
    paddingTop: 9,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft:8,
    fontFamily: 'Avenir',
    fontSize: 12,
    borderColor: "black",
    borderWidth: 1
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

export default OnboardAccountCreation;
