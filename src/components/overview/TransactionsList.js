import React from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { ToMonetaryStr } from '../../helpers/formatting';
import SubView from '../layout/SubView';
import SectionHeader from '../layout/SectionHeader';
import TransactionCard from '../modules/cards/TransactionCard';

class TransactionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  render() {

    const searchTerm = this.state.searchTerm;

    let transactionsList = this.props.transactionsList;
    const account_id = this.props.account_id;
    transactionsList = transactionsList.filter( account => (account._account === account_id));
    if (searchTerm) {
      const check = searchTerm.toLowerCase();
      transactionsList = transactionsList.filter( account => (account.name.toLowerCase().includes(check)));
    }

    const transactions = transactionsList.map((item, i) => (
      <TransactionCard
        key={i}
        name={item.name}
        amount={ToMonetaryStr(item.amount, true)}
        date={item.date}
      />
    ));

    const handleBack = () => {
      this.setState({searchTerm: ''});
      Actions.pop();
      StatusBar.setBarStyle('default', true);
    };

    const handleSearchTerm = (searchTerm) => {
      this.setState({searchTerm});
    }

    const banner = require('../../../assets/searchIcon.png');

    return (
      <SubView
        title={this.props.accountName}
        leftIcon={{type: 'exitWhite', action: handleBack}}
        headerColor={this.props.bankColor}
        backgroundColor={'#F6F8F9'}
      >
        <ScrollView style={s.container}>
          <View style={s.searchBar}>
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
                onChangeText={(searchTerm) => handleSearchTerm(searchTerm)}
                value={this.state.searchTerm}
                autoCapitalize={'none'}
                style={s.searchBarText}
              />
            </View>
          </View>
          <SectionHeader
            text={"Transactions"}
          />
          {transactions}
        </ScrollView>
      </SubView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 5,
    marginTop: 16,
  },
  imageWrapper: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 14,
  },
  searchBarWrapper: {
    flex: 10,
  },
  searchBarImage: {
    height: 15,
    width: 15,
  },
  searchBarText: {
    height: 35,
    color: 'black',
    fontFamily: 'Avenir-Heavy',
    fontSize: 14,
  },
});

TransactionList.propTypes = ({
  transactionsList: React.PropTypes.array.isRequired,
  account_id: React.PropTypes.string.isRequired,
  accountName: React.PropTypes.string.isRequired,
});

export default TransactionList;
