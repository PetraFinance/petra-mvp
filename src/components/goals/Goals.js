import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { IntToMonetaryStr, MonetaryStrToInt } from '../../helpers/currency';
import GoalsCard from '../modules/cards/GoalsCard';
import GoalsButtons from '../modules/buttons/GoalsButtons';
import MainView from '../layout/MainView';

class Goals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const updateSavedAmount = (id, currentSaved, saveAmount, cost) => {
      let updated = currentSaved + saveAmount;
      if (updated >= cost) {
        this.props.setGoalCompleted(id);
      } else {
        this.props.updateSavedAmount(id, updated);
      }
    }
    const handleRemoveGoal = (id) => {
      this.props.handleRemoveGoal(id);
    }
    const genGoalsList = () => {
      let goal, key, card;
      let goals = [];
      let goalsList = this.props.goalsList;
      for (key in Object.keys(goalsList)) {
        goal = goalsList[key];
        goals.push(
          <View
            key={key}
            style={s.marginBottom}
          >
            <GoalsCard
              goalName={goal.name}
              currentSaved={goal.currentSaved}
              goal={goal.cost}
              saveAmount={goal.saveAmount}
              barColor="#03A9F4"
              completed={goal.completed}
            />
            <GoalsButtons
              saveAmount={goal.saveAmount}
              saveAction={() => updateSavedAmount(key, goal.currentSaved, goal.saveAmount, goal.cost)}
              rmAction={() => handleRemoveGoal(key)}
              completed={goal.completed}
            />
          </View>
        );
      }
      return goals;
    }
    const genPage = () => {
      return (
        <View style={s.container}>
          {genGoalsList()}
        </View>
      );
    }
    return (
      <MainView
        title="Goals"
        rightIcon={ {type: "add", action: Actions.goals_name } }
      >
        {genPage()}
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
  goalsList: React.PropTypes.object.isRequired,
  updateSavedAmount: React.PropTypes.func.isRequired,
}

export default Goals;
