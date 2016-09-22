import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/AdvanceButton';
import RadioButtonSimple from '../RadioButtonSimple';

class OnboardAccountCreation extends React.Component {

  handleEmail(email) {
    this.props.handleEmail(email);
  }

  handlePassword(password) {
    this.props.handlePassword(password);
  }

  handlePasswordConfirm(passwordConfirm) {
    this.props.handlePasswordConfirm(passwordConfirm);
  }

  checkValidEmail() {
    const email = this.props.email;
    var re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  checkValidPassword() {
    const password = this.props.password;
    const confirm = this.props.passwordConfirm;
    let match = false;

    let re = /[A-Z]+/;
    const capital = re.test(password);

    re = /\d+/;
    const number = re.test(password);

    if (password === confirm && password !== '')
      match = true;

    return {
      capital,
      number,
      match,
    }
  }

  render() {

    let blurbImage = require('../../../assets/logo.png');

    return (
      <View style={s.page}>
        <View style={s.container}>

          <View style={s.intro}>
            <Text style={s.welcome}>Create your account</Text>
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
                ref={'email'}
                onChangeText={(email) => this.handleEmail(email)}
                value={this.props.email}
                style={s.input}
                autoCapitalize={'none'}
                onSubmitEditing={() => {
                  this.refs.password.focus();
               }}
              />
            </View>
            <View>
              <Text style={s.label}>Password</Text>
              <TextInput
                ref={'password'}
                onChangeText={(password) => this.handlePassword(password)}
                value={this.props.password}
                style={s.input}
                secureTextEntry={true}
                onSubmitEditing={() => {
                  this.refs.passwordConfirm.focus();
               }}
              />
            </View>
            <View>
              <Text style={s.label}>Confirm your password</Text>
              <TextInput
                ref={'passwordConfirm'}
                onChangeText={(passwordConfirm) => this.handlePasswordConfirm(passwordConfirm)}
                value={this.props.passwordConfirm}
                style={s.input}
                secureTextEntry={true}
                autoCapitalize={'none'}
              />
            </View>
          </View>

          <View style={s.checks}>
            <RadioButtonSimple
              check={this.checkValidEmail()}
              condition={'Valid e-mail Address'}
            />
            <RadioButtonSimple
              check={this.checkValidPassword().capital}
              condition={'Password contains a capital letter'}
            />
            <RadioButtonSimple
              check={this.checkValidPassword().number}
              condition={'Password contains a number'}
            />
            <RadioButtonSimple
              check={this.checkValidPassword().match}
              condition={'Passwords match'}
            />
          </View>

          <View style={s.blurb}>
            <Image
              source={blurbImage}
              style={s.blurbImage}
            />
            <Text style={s.blurbText}>So baby pull me closer in the backseat of your Rover that I know you can’t afford bite that tattoo on your shoulder</Text>
          </View>

        </View>

        <AdvanceButton
          text={'CREATE ACCOUNT'}
          pressAction={Actions.termsAndConditions}
        />

      </View>
    );
 }
}

const s = StyleSheet.create({
  blurb: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'column',
  },
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  intro: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0FA0EA',
  },
  fbLoginText: {
    fontFamily: 'Avenir',
    color: 'white',
  },
  separator: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingLeft: 8,
    fontFamily: 'Avenir',
    fontSize: 12,
    borderColor: 'black',
    borderWidth: 1,
  },
});

OnboardAccountCreation.PropTypes = {
  handleEmail: React.PropTypes.func.isRequired,
  handlePassword: React.PropTypes.func.isRequired,
  handlePasswordConfirm: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  passwordConfirm: React.PropTypes.string.isRequired,
}

export default OnboardAccountCreation;
