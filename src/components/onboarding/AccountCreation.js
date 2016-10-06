import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import AdvanceButton from '../../containers/partials/AdvanceButton';

class OnboardAccountCreation extends React.Component {

  handleEmail(email) {
    this.props.handleEmail(email);
  };

  handlePassword(password) {
    this.props.handlePassword(password);
  };

  handlePasswordConfirm(passwordConfirm) {
    this.props.handlePasswordConfirm(passwordConfirm);
  };

  checkValidEmail() {
    const email = this.props.email;
    var re = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

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
    };
  };

  render() {
    const blurbImage = require('../../../assets/logo.png');

    return (
      <View style={s.page}>
        <View style={s.container}>

        </View>

        <AdvanceButton
          text={'Create Account'}
          pressAction={Actions.termsAndConditions}
        />

      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
  },
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

OnboardAccountCreation.propTypes = {

};

export default OnboardAccountCreation;
