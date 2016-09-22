import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearchBanks = this.handleSearchBanks.bind(this);
  }

  handleSearchBanks() {
    this.props.handleSearchBanks();
  }

  render() {

    let banner = require("../../../assets/logo.png");

    return (
      <View style={s.container}>
        <View style={s.imageWrapper}>
          <Image
             source={ banner }
             style={s.searchBarImage}
           />
        </View>
        <View style={s.searchBarWrapper}>
          <TextInput
            ref={"search"}
            placeholder={"Search"}
            onChangeText={(searchTerm) => this.handleSearchBanks(searchTerm)}
            value={ this.props.onboardBankSearch }
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
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1
  },
  imageWrapper: {
    flex: 1,
    marginLeft: 5
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
  }
});

export default SearchBar;
