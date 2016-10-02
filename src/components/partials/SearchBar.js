import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearchBankOnboarding = this.handleSearchBankOnboarding.bind(this);
  }

  handleSearchBankOnboarding(searchTerm) {
    this.props.handleSearchBankOnboarding(searchTerm);
  }

  render() {
    const banner = require('../../../assets/logo.png');
    return (
      <View style={s.container}>
        <View style={s.imageWrapper}>
          <Image
            source={banner}
            style={s.searchBarImage}
          />
        </View>
        <View style={s.searchBarWrapper}>
          <TextInput
            ref={'search'}
            placeholder={'Search'}
            onChangeText={(searchTerm) => this.handleSearchBankOnboarding(searchTerm)}
            value={this.props.searchBankOnboarding}
            autoCapitalize={'none'}
            style={s.searchBarText}
          />
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderColor: '#F2F2F2',
    borderRadius: 5,
    borderWidth: 1,
  },
  imageWrapper: {
    flex: 1,
    marginLeft: 5,
  },
  searchBarWrapper: {
    flex: 10,
  },
  searchBarImage: {
    height: 25,
    width: 25,
  },
  searchBarText: {
    height: 35,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    fontSize: 12,
  },
});

SearchBar.propTypes = {
  handleSearchBankOnboarding: React.PropTypes.func.isRequired,
  searchBankOnboarding: React.PropTypes.string.isRequired,
};

export default SearchBar;
