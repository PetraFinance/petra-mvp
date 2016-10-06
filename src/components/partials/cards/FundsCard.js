import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertNumbertoDollars, convertDollarstoNumbers } from '../../../helpers/currency';

import Card from './Card';
import SpendingBar from '../SpendingBar';

class FundsCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const genSpendingDetails = () => {
      const goal = this.props.goal;
      const spent = this.props.goal - convertDollarstoNumbers(this.props.current);

      if (this.props.showSpent) {
        return (
          <View style={s.spendingDetails}>
            <Text style={s.spendingDetailsLeft}>{convertNumbertoDollars(goal)}</Text>
            <Text style={s.spendingDetailsRight}>{convertNumbertoDollars(spent) + ' Spent'}</Text>
          </View>
        );
      }
      return (<View />);
    };

    const genFundsCard = () => {

      return (
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
            current={convertDollarstoNumbers(this.props.current)}
            goal={this.props.goal}
            barColor={this.props.barColor}
          />
          {genSpendingDetails()}
        </View>
      );
    };

    return (
      <Card
        children={genFundsCard()}
        divider={this.props.divider}
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
  spendingDetails: {
    flexDirection: 'row',
    marginTop: 10,
  },
  spendingDetailsRight: {
    flex: 0.5,
    justifyContent: 'center',
    textAlign: 'right',
    fontFamily: 'Avenir',
    color: '#263238',
  },
  spendingDetailsLeft: {
    flex: 0.5,
    justifyContent: 'center',
    fontFamily: 'Avenir',
    color: '#263238',
  },
});

FundsCard.propTypes = {
  category: React.PropTypes.string.isRequired,
  current: React.PropTypes.string.isRequired,
  timeToReset: React.PropTypes.string.isRequired,
  barColor: React.PropTypes.string.isRequired,
  divider: React.PropTypes.bool,
  showSpent: React.PropTypes.bool,

};

export default FundsCard;
