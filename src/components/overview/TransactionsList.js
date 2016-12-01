import React from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, TouchableHighlight, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { ToMonetaryStr, formatTransaction } from '../../helpers/formatting';
import SubView from '../layout/SubView';
import SectionHeader from '../layout/SectionHeader';
import TransactionCard from '../modules/cards/TransactionCard';

class TransactionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      showAmount: 15,
    }
  }

  render() {

    const searchTerm = this.state.searchTerm;
    const showAmount = this.state.showAmount;

    let transactionsList = this.props.transactionsList;
    const account_id = this.props.account_id;
    transactionsList = transactionsList.filter( account => (account._account === account_id));
    if (searchTerm) {
      const check = searchTerm.toLowerCase();
      transactionsList = transactionsList.filter( account => (account.name.toLowerCase().includes(check)));
    }

    const displayedTransactions = transactionsList.slice(0, showAmount);

    const transactions = displayedTransactions.map((item, i) => (
      <TransactionCard
        key={i}
        name={formatTransaction(item.name)}
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

    const genShowMore = () => {
      const showAmount = this.state.showAmount;
      if (showAmount >= transactionsList.length) {
        return ( <View/> );
      }
      return (
        <TouchableHighlight
          underlayColor={'#F6F8F9'}
          onPress={() => showMore()}
          style={s.showMore}
        >
          <Text style={showMoreStyle}>Show More</Text>
        </TouchableHighlight>
      );
    }

    const showMore = () => {
      let showAmount = this.state.showAmount;
      showAmount = showAmount + 15;
      this.setState({showAmount});
    }

    const showMoreStyle = {
      color: this.props.bankColor,
      fontFamily: 'Avenir-Heavy',
    };

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
          {genShowMore()}
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
  showMore: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },
});

TransactionList.propTypes = ({
  transactionsList: React.PropTypes.array.isRequired,
  account_id: React.PropTypes.string.isRequired,
  accountName: React.PropTypes.string.isRequired,
});

export default TransactionList;
