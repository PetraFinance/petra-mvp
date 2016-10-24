import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';

import GoalsCard from '../partials/cards/GoalsCard';
import SaveButton from '../partials/SaveButton';

import MainView from './MainView';

class Goals extends React.Component {
  render() {

    let goalsList = this.props.goalsList;

    const genGoalsList = goalsList.map((goal, i) => (
      <View
        key={i}
      >
        <GoalsCard
          category={goal.name}
          current={goal.current}
          goal={parseInt(goal.cost)}
          barColor="black"
        />
        <SaveButton
          saveAmount={goal.saveAmount}
        />
      </View>
    ));

    const genPage = () => {
      if (goalsList.length === 0) {
        return ( <View /> );
      }
      return (
        <View style={s.container}>
          {genGoalsList}
        </View>
      );
    }

    return (
      <MainView
        title="Goals"
        rightIcon={ {type: "add", action: Actions.goals_add } }
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
});

export default Goals;
