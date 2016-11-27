import React from 'react';
import { StyleSheet, View, ScrollView, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SubView from '../layout/SubView';
import SectionHeader from '../layout/SectionHeader';
import TransactionCard from '../modules/cards/TransactionCard';

class TransactionList extends React.Component {

  render() {

    let transactionsList = this.props.transactionsList;
    const account_id = this.props.account_id;
    transactionsList = transactionsList.filter( account => (account._account === account_id));

    const transactions = transactionsList.map((item, i) => (
      <TransactionCard
        key={i}
        business={item.name}
        expense={item.amount}
        date={item.date}
      />
    ));

    const handleBack = () => {
      Actions.pop();
      StatusBar.setBarStyle('default', true);
    };

    return (
      <SubView
        title={this.props.accountName}
        leftIcon={{type: 'exitWhite', action: handleBack}}
        headerColor={this.props.bankColor}
        backgroundColor={'#F6F8F9'}
      >
        <ScrollView style={s.container}>
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
});

TransactionList.propTypes = ({
  transactionsList: React.PropTypes.array.isRequired,
  account_id: React.PropTypes.string.isRequired,
  accountName: React.PropTypes.string.isRequired,
});

export default TransactionList;
