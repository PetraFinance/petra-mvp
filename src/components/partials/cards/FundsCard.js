import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dimensions from 'Dimensions';

import Card from './Card';
import SpendingBar from '../SpendingBar';

class FundsCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let currentSpending = this.props.current;
    currentSpending = currentSpending.replace(',', '');
    const intCurrent = parseInt(currentSpending.slice(1, currentSpending.length));

    const genFundsCard = () => (
      <View>
        <View style={s.container}>
          <View style={s.leftHandSide}>
            <Text style={s.category}>{this.props.category}</Text>
            <Text style={s.timeToReset}>{this.props.timeToReset}</Text>
          </View>
          <View style={s.rightHandSide}>
            <Text style={s.amount}>{this.props.current}</Text>
            <Text style={s.stateOfFunds}>Remaining</Text>
          </View>
        </View>
        <SpendingBar
          current={intCurrent}
          goal={this.props.goal}
          barColor={this.props.barColor}
        />
      </View>
    );

    return (
      <Card
        children={genFundsCard()}
        divider={true}
      />
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  rightHandSide: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftHandSide: {
    flex: 0.5,
    justifyContent: 'center',
  },
  category: {
    fontFamily: 'Avenir-Medium',
  },
  timeToReset: {
    fontFamily: 'Avenir',
    color: '#263238',
  },
  amount: {
    fontFamily: 'Avenir-Medium',
    color: '#03A9F4',
  },
  stateOfFunds: {
    fontFamily: 'Avenir',
    color: '#263238',
  },
  spendingBar: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5,
  },
});

FundsCard.PropTypes = {
  category: React.PropTypes.string.isRequired,
  current: React.PropTypes.string.isRequired,
  timeToReset: React.PropTypes.string.isRequired,
};

export default FundsCard;
