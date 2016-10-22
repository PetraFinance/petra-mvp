import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';

import GoalsCard from '../partials/cards/GoalsCard';
import SaveButton from '../partials/SaveButton';

import MainView from './MainView';

class Goals extends React.Component {
  render() {
    const genPage = () => {
      return (
        <View style={s.container}>
          <GoalsCard
            category="Memes"
            current={420}
            goal={1000}
            timeToReset="5 days"
            barColor="black"
          />
          <SaveButton />
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
