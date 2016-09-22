import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/AdvanceButton';

class OnboardLanding extends React.Component {

  render() {
    return (
      <View style={s.page}>
        <View style={s.banner}>
          <Image
            source={ banner }
            style={s.bannerImage}
           />
        </View>
        <View style={s.intro}>
          <Text style={s.welcome}>
            Welcome to Petra!
          </Text>
          <Text style={s.desc}>
            We’ll help you do memes and other financially sound things really easily et cetera et cetera. Dont you love memes like this?
          </Text>
        </View>
        <AdvanceButton
          text={'CONTINUE'}
          pressAction={Actions.accountCreation}
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
    backgroundColor: 'white',
  },
  banner: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    height: 300,
    width: 300,
  },
  intro: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0FA0EA',
  },
  desc: {
    marginTop: 20,
    marginRight: 45,
    marginLeft: 45,
    fontFamily: 'Avenir',
    textAlign: 'center',
  }
});

export default OnboardLanding;
