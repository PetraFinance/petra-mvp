import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-redux-router';

import SectionHeader from '../partials/layout/SectionHeader';
import Card from '../partials/cards/Card';
import BottomButton from '../partials/buttons/BottomButton';
import BaseView from './BaseView';


class FundAdjust extends React.Component {

  render() {

    const genFundingAdvice = () => (
      <Text style={s.fundingAdvice}>Changing your fund to this amount results in a deficit of $1,001 per month which you’ll have to fund from other funds.By default, it all comes from your general savings, but you can customize how much you get from each fund. Fix this copy, it sucks.</Text>
    );

    const genFundsOverview = () => (
      <Text style={s.fundingAdvice}>This is your fucking overview</Text>
    );

    const genFundingRule = () => (
      <Text style={s.fundingAdvice}>Shit to handle adjusting your funding rules will go here ay fucking lmao.</Text>
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
          children={genFundingRule()}
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
            parent={this.props.parent}
            title={this.props.title}
            hideBottomNavBar
            headerBackgroundColor={'#455A64'}
            headerTextColor={'white'}
            leftIcon={{ type: 'exit', action: Actions.pop }}
            children={genFundAdjust()}
          />
        </View>
        <BottomButton
          text={"LOOKS GOOD!"}
          pressAction={Actions.funds}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundingAdvice: {
    fontFamily: 'Avenir',
  },
});

FundAdjust.propTypes = {
  parent: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default FundAdjust;
