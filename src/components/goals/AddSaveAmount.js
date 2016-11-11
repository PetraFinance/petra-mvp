import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

import GoalsCard from '../modules/cards/GoalsCard';
import FlowButtons from '../modules/buttons/FlowButtons';
import SubView from '../layout/FlowView';

import { StripMonetaryStr, isNumber } from '../../helpers/currency';

class AddSaveAmount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const saveAmount = this.props.saveAmount;

    const handleAddGoal = () => {
      if (isNumber(saveAmount)) {
        name = this.props.goalName;
        cost = StripMonetaryStr(this.props.goalCost);
        date = this.props.goalDate;
        save = StripMonetaryStr(this.props.saveAmount);
        this.props.handleAddGoal(name, date, cost, save);
        this.props.resetGoalAdd();
        Actions.goals();
      }
    }

    const handleSaveAmount = (saveAmount) => {
      this.props.handleSaveAmount(saveAmount);
    }

    const validateInput = () => {
      return isNumber(saveAmount);
    }

    const handleGoalCost = (saveAmount) => {
      this.props.handleGoalCost(saveAmount);
    }

    const genErrorMsg = () => {
      if (!isNumber(saveAmount)) {
        return (
          <Text style={s.errorMsg}>Please enter a numerical value.</Text>
        );
      }
      return ( <View /> );
    }


    const genPage = () => {
      return (
        <View style={s.container}>
          <View style={s.form}>
            <Text style={s.header}>How much could you save for this on a given day? For instance, $5 or $10.</Text>
            <TextInput
              style={s.input}
              maxLength={5}
              onChangeText={(saveAmount) => handleSaveAmount(saveAmount)}
              value={saveAmount}
              keyboardType='numeric'
            />
            <View style={s.underline}></View>
            {genErrorMsg()}
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
  errorMsg: {
    marginTop: 25,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'white',
  },
});

AddSaveAmount.propTypes = {
  handleAddGoal: React.PropTypes.func.isRequired,
  resetGoalAdd: React.PropTypes.func.isRequired,
  handleSaveAmount: React.PropTypes.func.isRequired,
  goalName: React.PropTypes.string.isRequired,
  goalCost: React.PropTypes.string.isRequired,
  goalDate: React.PropTypes.string.isRequired,
  saveAmount: React.PropTypes.string.isRequired,
}

export default AddSaveAmount;
