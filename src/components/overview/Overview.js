import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MainView from '../layout/MainView';
import SectionHeader from '../layout/SectionHeader';
import Card from '../modules/cards/Card';
import OverviewCard from '../modules/cards/OverviewCard';

import { setAllButLast } from '../../helpers/layout';
import { ToMonetaryStr } from '../../helpers/formatting';

class Overview extends React.Component {

  render() {
    const bankList = this.props.bankList;
    const creditList = this.props.creditList;
    const colorOptions = [
      '#E53935',
      '#D32F2F',
      '#03A9F4',
    ];

    const updatesCard = () => {
      return (
        <Card
          borderRadius={5}
        >
          <Text style={s.recTitle}>RECOMMENDATIONS</Text>
          <Text style={s.recText}>You only have $150.68 avaliable on your credit card. Consider paying your bill soon.</Text>
        </Card>
      );
    }

    const bankCards = bankList.map((item, i) => {
      const bankColor = colorOptions[i % (bankList.length)];
      return (
        <View
          style={setAllButLast(i, bankList.length, {paddingBottom: 14})}
          key={i}
        >
          <OverviewCard
            backgroundColor={bankColor}
            bank={item.name}
            balance={ToMonetaryStr(item.balance)}
            type={item.type}
            onPress={() => Actions.transactionsList({accountName: item.name, account_id: item.account_id, bankColor})}
          />
        </View>
      );
    });

    const creditCards = creditList.map((item, i) => {
      const bankColor = colorOptions[i % (creditList.length)];
      return (
        <View
          style={setAllButLast(i, creditList.length, {paddingBottom: 14})}
          key={i}
        >
          <OverviewCard
            backgroundColor={bankColor}
            bank={item.name}
            balance={ToMonetaryStr(item.balance, true)}
            type={item.type}
            onPress={() => Actions.transactionsList({accountName: item.name, account_id: item.account_id, bankColor})}
          />
        </View>
      );
    });

    const genPage = () => (
      <ScrollView style={s.container}>
        <SectionHeader
          text={'Updates'}
        />
        {updatesCard()}
        <SectionHeader
          text={'Bank Accounts'}
        />
        {bankCards}
        <SectionHeader
          text={'Credit Cards'}
        />
        {creditCards}
      </ScrollView>
    );

    return (
      <MainView
        title={'Overview'}
        rightIcon={ {type: "add", action: Actions.addAccount } }
      >
        {genPage()}
      </MainView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  recTitle: {
    color: '#03A9F4',
    fontFamily: 'Avenir-Heavy',
    fontSize: 12,
    marginBottom: 5,
  },
  recText: {
    fontFamily: 'Avenir',
  }
});

export default Overview;
