import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ToMonetaryStr } from '../../../helpers/currency';

import Card from './Card';
import SpendingBar from '../SpendingBar';

class GoalsCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const computeSavesRequired = (cost, currentSaved, saveAmount) => {
      cost = parseInt(cost);
      currentSaved = parseInt(currentSaved);
      saveAmount = parseInt(saveAmount);
      return Math.ceil((cost - currentSaved) / saveAmount);
    };

    const genPage = () => {
      let page;
      const cost = ToMonetaryStr(this.props.cost);
      const saveAmount = ToMonetaryStr(this.props.saveAmount);
      const currentSaved = ToMonetaryStr(this.props.currentSaved);
      const savesRequired = computeSavesRequired(this.props.cost, this.props.currentSaved, this.props.saveAmount);
      const goalName = this.props.goalName;

      if (this.props.completed) {
        page = (
          <View style={s.goalsCard}>
            <View style={s.goalCompleted}>
              <Text style={s.congratsText}>
                Nice! You just finished saving for
                <Text style={s.highlight}> {goalName}</Text>
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
                <Text style={s.category}>{goalName}</Text>
                <Text style={s.timeToReset}>{currentSaved} of {cost}</Text>
              </View>
              <View style={s.right}>
                <Text style={s.amount}>{savesRequired} Savings</Text>
                <Text style={s.stateOfFunds}>Until Goal</Text>
              </View>
            </View>
            <SpendingBar
              currentSaved={this.props.currentSaved}
              cost={this.props.cost}
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
  currentSaved: React.PropTypes.string.isRequired,
};

export default GoalsCard;
