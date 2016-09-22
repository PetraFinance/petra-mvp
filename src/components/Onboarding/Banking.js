import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/AdvanceButton'
import SearchBar from '../../containers/Onboarding/SearchBar';

class OnboardBanking extends React.Component {
  render() {
    return (
      <View style={s.page}>
        <View style={s.container}>
          <View style={s.intro}>
            <Text style={s.welcome}>Link your bank</Text>
            <Text style={s.desc}>Some magic is about to happen.</Text>
          </View>
          <View style={s.searchWrapper}>
            <SearchBar/>
          </View>
          <View style={s.results}>
          </View>
        </View>
        <AdvanceButton
          text={'LINK ACCOUNT'}
          pressAction={Actions.accountCreation}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  searchBarWrapper: {
    flex: 0.35,
  },
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
  },
  searchBar: {
    height: 20,
    width: 100,
  },
  intro: {
    flex: 0.5,
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
  results: {
    flex: 3,
  },
});

export default OnboardBanking;
