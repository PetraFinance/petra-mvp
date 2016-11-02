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

    const updateSavedAmount = (id, currentSaved, saveAmount, cost) => {
      currentSaved = parseInt(currentSaved);
      saveAmount = parseInt(saveAmount);
      cost = parseInt(cost);
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
              barColor="#03A9F4"
              completed={goal.completed}
            />
            <GoalsButtons
              completed={goal.completed}
              saveAmount={goal.saveAmount}
              id={id}
              saveAction={() => updateSavedAmount(id, goal.currentSaved, goal.saveAmount, goal.cost)}
              rmAction={() => handleRemoveGoal(id)}
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
    marginTop: 16,
    marginRight: 14,
    marginBottom: 16,
    marginLeft: 14,
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
