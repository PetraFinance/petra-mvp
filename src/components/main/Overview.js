import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import BaseView from './BaseView';
import AccountsCard from '../partials/cards/AccountsCard';
import SectionHeader from '../partials/layout/SectionHeader';

class Overview extends React.Component {

  render() {
    const genOverview = () => (
      <View>
        <SectionHeader
          header={'Bank Accounts'}
        />
        <View style={s.container}>
          <AccountsCard
            accountName={'Bank of America'}
            accountDesc={'Bank of America Checking'}
            accountValue={'$2,421'}
            divider={true}
          />
          <AccountsCard
            accountName={'Bank of America'}
            accountDesc={'Bank of America Savings'}
            accountValue={'$5,103'}
          />
        </View>
        <SectionHeader
          header={'Credit Cards'}
        />
        <View style={s.container}>
          <AccountsCard
            accountName={'Bank of America'}
            accountDesc={'Bank of America College Card'}
            accountValue={'$421'}
          />
        </View>
      </View>
    );

    return (
      <BaseView
        parent={'Overview'}
        title={'Overview'}
        children={genOverview()}
        scroll={true}
        rightIcon={{ type: 'add', action: Actions.addAccount }}
      />
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  section: {
    backgroundColor: 'white',
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 16,
    paddingBottom: 16,
  },
  sectionHeader: {
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 20,
    paddingBottom: 10,
    fontFamily: 'Avenir-Heavy',
    fontSize: 13,
  },
  sectionEntry: {
    flexDirection: 'row',
  },
  entryTitle: {
    flex: 1,
    fontFamily: 'Avenir',
  },
  entryCost: {
    flex: 1,
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  entryDesc: {
    flex: 1,
    fontFamily: 'Avenir',
    color: '#8A8B8C',
  },
});

export default Overview;
