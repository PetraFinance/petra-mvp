import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertNumberstoDollars, convertDollarstoNumbers } from '../../../helpers/currency';

import Card from './Card';
import SpendingBar from '../SpendingBar';

class GoalsCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const genPage = () => {

      const current = convertNumberstoDollars(this.props.current);
      const goal = convertNumberstoDollars(this.props.goal);

      return (
        <View>
          <View style={s.container}>
            <View style={s.left}>
              <Text style={s.category}>{this.props.category}</Text>
              <Text style={s.timeToReset}>{current} of {goal}</Text>
            </View>
            <View style={s.right}>
              <Text style={s.amount}>23 Savings</Text>
              <Text style={s.stateOfFunds}>Until Goal</Text>
            </View>
          </View>
          <SpendingBar
            current={this.props.current}
            goal={this.props.goal}
            color={this.props.barColor}
          />
        </View>
      );
    };

    return (
      <Card>
        {genPage()}
      </Card>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  right: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  left: {
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

GoalsCard.propTypes = {
  category: React.PropTypes.string.isRequired,
  barColor: React.PropTypes.string.isRequired,
  divider: React.PropTypes.bool,
  showSpent: React.PropTypes.bool,
  current: React.PropTypes.number.isRequired,
};

export default GoalsCard;
