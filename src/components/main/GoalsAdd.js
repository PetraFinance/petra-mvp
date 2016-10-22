import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

import GoalsCard from '../partials/cards/GoalsCard';
import AdvanceFlowButton from '../partials/AdvanceFlowButton';
import SubView from './SubView';

class GoalsAdd extends React.Component {
  render() {
    const handleAdvanceGoalState = () => {
      this.props.handleAdvanceGoalState();
    }

    const handleBackGoalState = () => {
      this.props.handleBackGoalState();
    }

    const resetGoalState = () => {
      this.props.resetGoalState();
      StatusBar.setBarStyle('default', true);
      Actions.pop();
    }

    const genPage = () => {
      const stages = [
        {
          prompt: "What's a thing you want to save for?",
          action: this.props.handleGoalName,
          value: this.props.goalName,
        },
        {
          prompt: "How much will this cost?",
          action: this.props.handleGoalCost,
          value: this.props.goalCost,
        },
        {
          prompt: "When do you want to finish this goal by?",
          action: this.props.handleGoalDate,
          value: this.props.goalDate,
        },
        {
          prompt: "How much are you willing to save on this? We think $10 is a reasonable amount.",
          action: this.props.handleSaveAmount,
          value: this.props.saveAmount,
        },
      ];

      const current = stages[this.props.goalState];
      let next = "Next";
      let nextAction = handleAdvanceGoalState;
      let back = "Back";
      let backAction = handleBackGoalState;
      if (this.props.goalState === 3) {
        next = "Finish";
        nextAction = resetGoalState;
      }
      if (this.props.goalState === 0) {
        backAction = resetGoalState;
      }

      return (
        <View style={s.container}>
          <View style={s.form}>
            <Text style={s.header}>{current.prompt}</Text>
            <TextInput
              style={s.input}
              maxLength={35}
              onChangeText={(text) => current.action(text)}
              value={current.value}
            />
            <View style={s.underline}></View>
          </View>
          <AdvanceFlowButton
            next={next}
            back={back}
            backAction={backAction}
            nextAction={nextAction}
          />
        </View>
      );
    }

    return (
      <SubView
        title="Add a Goal"
        leftIcon={ {type: "exitWhite", action: resetGoalState } }
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
    marginRight: 28,
    marginBottom: 16,
    marginLeft: 28,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: 'white',
    marginBottom: 5,
  },
  input: {
    fontFamily: 'Avenir',
    height: 40,
    textAlign: 'center',
    color: 'white',
  },
  underline: {
    backgroundColor: 'white',
    height: 1,
    alignSelf: 'stretch',
  },
});

export default GoalsAdd;
