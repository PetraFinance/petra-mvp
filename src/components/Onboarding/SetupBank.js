import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/AdvanceButton';

class SetupBank extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const blurbImage = require('../../../assets/logo.png');
    return (
      <View style={s.page}>
        <View style={s.container}>
          <View style={s.intro}>
            <Text style={s.welcome}>Link your bank</Text>
            <Text style={s.desc}>Please enter your {this.props.bank} info</Text>
          </View>
          <View style={s.form}>
            <View>
              <Text style={s.label}>User ID</Text>
              <TextInput
                ref={'user_id'}
                style={s.input}
                autoCapitalize={'none'}
                onSubmitEditing={() => {
                  this.refs.bank_password.focus();
               }}
              />
            </View>
            <View>
              <Text style={s.label}>Password</Text>
              <TextInput
                ref={'bank_password'}
                style={s.input}
                secureTextEntry={true}
              />
            </View>
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
          text={"LINK ACCOUNT"}
          pressAction={Actions.onboardLaunch}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
  },
  intro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    marginBottom: 2,
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  form: {
    flex: 2.5,
    justifyContent: 'center',
  },
  desc: {
    fontFamily: 'Avenir',
    textAlign: 'center',
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
});

export default SetupBank;
