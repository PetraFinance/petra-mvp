import React from 'react';
import { StyleSheet, Text, View, ScrollView, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-redux-router';
import AdvanceButton from '../../containers/AdvanceButton';
import SearchBar from '../../containers/Onboarding/SearchBar';

class SelectBank extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectBank = this.handleSelectBank.bind(this);
    this.banks =
    [
      "Bank of America",
      "Wells Fargo",
      "Capital One",
      "Lending Club",
      "The Empire",
      "Uber",
      "Airbnb",
      "Gigster",
      "Innovative Design",
      "Sad bois",
      "Dank memers",
      "The Electoral College",
      "Sons of Shepards",
    ]
  }

  handleSelectBank(bank) {
    Actions.accountCreation();
    this.props.handleAdvance();
    this.props.handleSelectBank(bank);
  }

  render() {

    let banks = this.banks.filter((item) => (item.includes(this.props.searchBankOnboarding)) )

    const rows = banks.map((bank, i) => (
      <TouchableHighlight
        key={i}
        underlayColor={'#72BEE4'}
        activeOpacity={1}
        style={s.bank}
        onPress={() => this.handleSelectBank(bank)}
      >
        <View>
          <Text style={s.bankName}>
            {bank}
          </Text>
        </View>
      </TouchableHighlight>
    ));

    return (
      <View style={s.page}>
        <View style={s.container}>
          <View style={s.intro}>
            <Text style={s.welcome}>Link your bank</Text>
            <Text style={s.desc}>Some magic is about to happen.</Text>
          </View>
          <View style={s.searchBarWrapper}>
            <SearchBar/>
          </View>
          <ScrollView style={s.results}>
            {rows}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  searchBarWrapper: {
    flex: 0.25,
    alignItems: 'center',
  },
  results: {
    flex: 3,
    marginBottom: 30,
    marginTop: 20,
  },
  bank: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bankName: {
    fontFamily: 'Avenir',
    marginLeft: 8,
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
});

SelectBank.PropTypes = {
  bank: React.PropTypes.string.isRequired,
  searchBankOnboarding: React.PropTypes.string.isRequired,
};

export default SelectBank;
