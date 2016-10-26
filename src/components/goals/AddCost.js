import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

import GoalsCard from '../modules/cards/GoalsCard';
import FlowButtons from '../modules/buttons/FlowButtons';
import SubView from '../layout/FlowView';

class AddCost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleGoalCost = (cost) => {
      this.props.handleGoalCost(cost);
    }
    const goalCost = this.props.goalCost;
    const genPage = () => {
      return (
        <View style={s.container}>
          <View style={s.form}>
            <Text style={s.header}>How much will this cost?</Text>
            <TextInput
              style={s.input}
              maxLength={35}
              onChangeText={(cost) => handleGoalCost(cost)}
              value={goalCost}
            />
            <View style={s.underline}></View>
          </View>
          <FlowButtons
            next={"Next"}
            nextAction={Actions.goals_dueDate}
          />
        </View>
      );
    }
    return (
      <SubView
        title="Add the Cost"
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

AddCost.propTypes = {
  goalCost: React.PropTypes.any.isRequired,
  handleGoalCost: React.PropTypes.func.isRequired,
}

export default AddCost;
