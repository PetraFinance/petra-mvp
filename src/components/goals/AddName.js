import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

import GoalsCard from '../modules/cards/GoalsCard';
import FlowButtons from '../modules/buttons/FlowButtons';
import SubView from '../layout/FlowView';

class AddName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleGoalName = (name) => {
      this.props.handleGoalName(name);
    }
    const goalName = this.props.goalName;
    const resetGoalState = () => {
      this.props.resetGoalState();
      Actions.pop();
    }
    const genPage = () => (
      <View style={s.container}>
        <View style={s.form}>
          <Text style={s.header}>What is a thing you want to save for?</Text>
          <TextInput
            style={s.input}
            maxLength={35}
            onChangeText={(name) => handleGoalName(name)}
            value={goalName}
          />
          <View style={s.underline}></View>
        </View>
        <FlowButtons
          next={"Next"}
          nextAction={Actions.goals_cost}
        />
      </View>
    );
    return (
      <SubView
        title="Label Your Goal"
        leftIcon={ {type: "backWhite", action: resetGoalState } }
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

AddName.propTypes = {
  handleGoalName: React.PropTypes.func.isRequired,
  resetGoalState: React.PropTypes.func.isRequired,
  goalName: React.PropTypes.string.isRequired,
}

export default AddName;
