import React from 'react';
import { StyleSheet, View } from 'react-native';

import SectionHeader from '../partials/layout/SectionHeader';
import FundsCard from '../partials/cards/FundsCard';
import BaseView from './BaseView';


class Funds extends React.Component {

  render() {
    const genFunds = () => (
      <View>
        <SectionHeader
          header={'Summary'}
        />
        <FundsCard
          category={'General Savings'}
          timeToReset={'5 days until reset'}
          current={'$1,420'}
          goal={2000}
          barColor={'#ED417B'}
          divider
        />
        <FundsCard
          category={'Recurring Expenses'}
          timeToReset={'3 days until paycheck'}
          current={'$920'}
          goal={1200}
          barColor={'#9C27B0'}
          divider
        />
        <FundsCard
          category={'General Spending'}
          timeToReset={'12 days until reset'}
          current={'$265'}
          goal={400}
          barColor={'#F44336'}
        />
        <SectionHeader
          header={'Custom Funds'}
        />
      </View>
    );

    return (
      <BaseView
        parent={this.props.parent}
        title={this.props.title}
        children={genFunds()}
        scroll
      />
    );
  }
}

const s = StyleSheet.create({
  scrollContainer: {
    marginTop: 15,
  },
  page: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
  pageHeader: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFC',
  },
  pageHeaderText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03A9F4',
  },
});

Funds.propTypes = {
  parent: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Funds;