import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import GoalsCard from '../partials/cards/GoalsCard';
import AdvanceFlowButton from '../partials/AdvanceFlowButton';

import SubView from './SubView';

class GoalsCreate extends React.Component {
  render() {
    const genPage = () => {
      return (
        <View style={s.container}>
          <View style={s.form}>
            <Text style={s.header}>What's a goal you'd like to add?</Text>
          </View>
          <AdvanceFlowButton />
        </View>
      );
    }

    return (
      <SubView
        title="ADD A GOAL"
        leftIcon={ {type: "backWhite", action: Actions.pop } }
      >
        {genPage()}
      </SubView>
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
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Avenir',
    color: 'white',
  },
});

export default GoalsCreate;
