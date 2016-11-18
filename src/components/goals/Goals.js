import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';

import { IntToMonetaryStr, MonetaryStrToInt } from '../../helpers/currency';
import GoalsCard from '../modules/cards/GoalsCard';
import GoalsButtons from '../modules/buttons/GoalsButtons';
import MainView from '../layout/MainView';

class Goals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const goalsMap = this.props.goalsMap;

    const cardBackgroundColors = [
      { top: '#E91E63', bottom: '#D81B60', fade: '#F8BBD0',},
      { top: '#00BCD4', bottom: '#00ACC1', fade: '#B2EBF2',},
    ];

    const updateSavedAmount = (id, currentSaved, saveAmount, cost) => {
      currentSaved = parseFloat(currentSaved);
      saveAmount = parseFloat(saveAmount);
      cost = parseFloat(cost);
      let updated = currentSaved + saveAmount;
      if (updated >= cost) {
        this.props.setGoalCompleted(id);
      } else {
        updated = updated.toString();
        this.props.updateSavedAmount(id, updated);
      }
    }

    const handleRemoveGoal = (id) => {
      this.props.handleRemoveGoal(id);
    }

    const genPage = () => {
      let goals = [];
      for (const id of Object.keys(goalsMap)) {
        const goal = goalsMap[id];
        const colorIndex = parseInt(id) % cardBackgroundColors.length;
        const cardColorSet = cardBackgroundColors[colorIndex]
        goals.push(
          <View
            key={id}
            style={s.marginBottom}
          >
            <GoalsCard
              goalName={goal.name}
              currentSaved={goal.currentSaved}
              cost={goal.cost}
              saveAmount={goal.saveAmount}
              barColor="white"
              barFade={cardColorSet.fade}
              backgroundColor={cardColorSet.top}
              completed={goal.completed}
              onPress={() => Actions.goalsEdit({ id: id })}
            />
            <GoalsButtons
              completed={goal.completed}
              saveAmount={goal.saveAmount}
              backgroundColor={cardColorSet.bottom}
              saveAction={() => updateSavedAmount(id, goal.currentSaved, goal.saveAmount, goal.cost)}
              rmAction={() => handleRemoveGoal(id)}
              id={id}
            />
          </View>
        );
      }
      return goals;
    }

    return (
      <MainView
        title="Goals"
        rightIcon={ {type: "add", action: Actions.goalsName } }
      >
        <ScrollView style={s.container}>
          {genPage()}
        </ScrollView>
      </MainView>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingRight: 14,
    paddingBottom: 16,
    paddingLeft: 14,
  },
  marginBottom: {
    marginBottom: 16,
  },
});

Goals.propTypes = {
  goalsMap: React.PropTypes.object.isRequired,
  updateSavedAmount: React.PropTypes.func.isRequired,
}

export default Goals;
