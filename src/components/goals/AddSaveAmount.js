import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

import GoalsCard from '../modules/cards/GoalsCard';
import FlowButtons from '../modules/buttons/FlowButtons';
import SubView from '../layout/FlowView';

class AddSaveAmount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleAddGoal = () => {
      name = this.props.goalName;
      cost = this.props.goalCost;
      date = this.props.goalDate;
      save = this.props.saveAmount;
      this.props.handleAddGoal(name, date, cost, save);
      this.props.resetGoalState();
      Actions.goals();
      StatusBar.setBarStyle('default', true);
    }
    const handleSaveAmount = (saveAmount) => {
      this.props.handleSaveAmount(saveAmount);
    }
    const saveAmount = this.props.saveAmount;
    const genPage = () => {
      return (
        <View style={s.container}>
          <View style={s.form}>
            <Text style={s.header}>How much could you save for this on a given day? We think $5 or $10 is a reasonable amount.</Text>
            <TextInput
              style={s.input}
              maxLength={35}
              onChangeText={(saveAmount) => handleSaveAmount(saveAmount)}
              value={saveAmount}
            />
            <View style={s.underline}></View>
          </View>
          <FlowButtons
            next={"Finish"}
            nextAction={handleAddGoal}
          />
        </View>
      );
    }

    return (
      <SubView
        title="Add a Saving Amount"
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

AddSaveAmount.propTypes = {
  handleAddGoal: React.PropTypes.func.isRequired,
  resetGoalState: React.PropTypes.func.isRequired,
  handleSaveAmount: React.PropTypes.func.isRequired,
  goalName: React.PropTypes.string.isRequired,
  goalCost: React.PropTypes.any.isRequired,
  goalDate: React.PropTypes.string.isRequired,
  saveAmount: React.PropTypes.any.isRequired,
}

export default AddSaveAmount;
