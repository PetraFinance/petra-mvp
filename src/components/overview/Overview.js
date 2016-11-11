import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MainView from '../layout/MainView';
import SectionHeader from '../layout/SectionHeader';
import OverviewCard from '../modules/cards/OverviewCard';

class Overview extends React.Component {

  render() {
    const bankList = this.props.bankList;

    const setStyle = (i, length) => {
      if (i === length - 1) {
        return {};
      }
      return {
        paddingBottom: 14,
      };
    }

    const bankCards = bankList.map((item, i) => (
      <View
        style={setStyle(i, bankList.length)}
        key={i}
      >
        <OverviewCard
          backgroundColor={'#E53935'}
          bank={item.name}
          balance={item.balance}
          type={item.type}
        />
      </View>
    ));

    const genPage = () => (
      <View style={s.container}>
        <SectionHeader
          text={'Bank Accounts'}
        />
        {bankCards}
        <SectionHeader
          text={'Credit Cards'}
        />
      </View>
    );

    return (
      <MainView
        title={'Overview'}
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
});

export default Overview;
