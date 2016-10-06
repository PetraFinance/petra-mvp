import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SectionHeader from '../partials/layout/SectionHeader';
import Card from '../partials/cards/Card';
import BottomButton from '../partials/buttons/BottomButton';
import BaseView from './BaseView';


class FundAdjust extends React.Component {

  constructor(props) {
    super(props);
    this.handleForward = this.handleForward.bind(this);
  }

  handleForward = () => {
    Actions.funds();
  }

  render() {
    const genFundsOverview = () => (
      <View>
        <Text style={s.fundingAdvice}>This is your fucking overview</Text>
      </View>
    );

    const genFundingFrequency = () => (
      <View style={s.rowContainer}>
        <Text style={s.fundingAmountText}>Funding Text</Text>
        <Text style={s.fundingAmount}>Every month</Text>
      </View>
    );

    const genFundingAmount = () => (
      <View style={s.rowContainer}>
        <Text style={s.fundingAmountText}>Amount</Text>
        <Text style={s.fundingAmount}>$1400</Text>
      </View>
    );

    const genFundingAdvice = () => (
      <Text style={s.fundingAdvice}>Changing your fund to this amount results in a deficit of $1,001 per month which you’ll have to fund from other funds. By default, it all comes from your general savings, but you can customize how much you get from each fund. Fix this copy, it sucks.</Text>
    );

    const genFundAdjust = () => (
      <View>
        <SectionHeader
          header={'Overview'}
        />
        <Card
          children={genFundsOverview()}
        />
        <SectionHeader
          header={'Funding Rule'}
        />
        <Card
          children={genFundingFrequency()}
          divider
        />
        <Card
          children={genFundingAmount()}
        />
        <SectionHeader
          header={'Funding Advice'}
        />
        <Card
          children={genFundingAdvice()}
        />
      </View>
    );

    return (
      <View style={s.container}>
        <View style={s.container}>
          <BaseView
            parent={'Funds'}
            title={'Adjust Fund'}
            hideBottomNavBar
            headerBackgroundColor={'#455A64'}
            headerTextColor={'white'}
            leftIcon={{ type: 'backWhite', action: Actions.pop }}
            children={genFundAdjust()}
          />
        </View>
        <BottomButton
          text={"LOOKS GOOD!"}
          pressAction={ () => this.handleForward() }
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fundingAdvice: {
    fontFamily: 'Avenir',
  },
  fundingAmount: {
    flex: 1,
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  fundingAmountText: {
    flex: 1,
    fontFamily: 'Avenir',
    color: '#263238',
  },
});

export default FundAdjust;
