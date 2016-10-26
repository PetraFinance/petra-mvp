import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IntToMonetaryStr, MonetaryStrToInt } from '../../../helpers/currency';

import Card from './Card';
import SpendingBar from '../SpendingBar';

class GoalsCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const genPage = () => {
      const savesLeft = Math.ceil( (this.props.goal - this.props.currentSaved) / this.props.saveAmount);
      if (this.props.completed) {
        page = (
          <View style={s.goalsCard}>
            <View style={s.goalCompleted}>
              <Text style={s.congratsText}>
                Nice! You just finished saving for
                <Text style={s.highlight}> {this.props.goalName}</Text>
                . That wasn&#39;t too hard now was it?
              </Text>
            </View>
          </View>
        );
      } else {
        page = (
          <View style={s.goalsCard}>
            <View style={s.container}>
              <View style={s.left}>
                <Text style={s.category}>{this.props.goalName}</Text>
                <Text style={s.timeToReset}>{IntToMonetaryStr(this.props.currentSaved)} of {IntToMonetaryStr(this.props.goal)}</Text>
              </View>
              <View style={s.right}>
                <Text style={s.amount}>{savesLeft} Savings</Text>
                <Text style={s.stateOfFunds}>Until Goal</Text>
              </View>
            </View>
            <SpendingBar
              currentSaved={this.props.currentSaved}
              goal={this.props.goal}
              color={this.props.barColor}
            />
          </View>
        );
      }
      return page;
    };

    return (
      <Card>
        {genPage()}
      </Card>
    );
  }
}

const s = StyleSheet.create({
  goalsCard: {
    height: 70,
  },
  goalCompleted: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratsText: {
    fontFamily: 'Avenir',
  },
  highlight: {
    fontFamily: 'Avenir-Heavy',
    color: '#03A9F4',
  },
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
});

GoalsCard.propTypes = {
  goalName: React.PropTypes.string.isRequired,
  barColor: React.PropTypes.string.isRequired,
  currentSaved: React.PropTypes.number.isRequired,
  divider: React.PropTypes.bool,
  showSpent: React.PropTypes.bool,
};

export default GoalsCard;
