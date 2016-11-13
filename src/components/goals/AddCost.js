import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

import GoalsCard from '../modules/cards/GoalsCard';
import FlowButtons from '../modules/buttons/FlowButtons';
import SubView from '../layout/SubView';

import { isNumber } from '../../helpers/currency';

class AddCost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cost = this.props.goalCost;
    const validateInput = () => {
      return isNumber(cost);
    }

    const handleGoalCost = (cost) => {
      this.props.handleGoalCost(cost);
    }

    const advanceFlow = () => {
      if (isNumber(cost)) {
        Actions.goalsSaveAmount();
      }
    }

    const genErrorMsg = () => {
      if (!isNumber(cost)) {
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
            <Text style={s.header}>How much will this cost?</Text>
            <TextInput
              style={s.input}
              maxLength={8}
              onChangeText={(cost) => handleGoalCost(cost)}
              value={cost}
              keyboardType='numeric'
            />
            <View style={s.underline}></View>
            {genErrorMsg()}
          </View>
          <FlowButtons
            next={"Next"}
            nextAction={() => advanceFlow()}
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

AddCost.propTypes = {
  goalCost: React.PropTypes.string.isRequired,
  handleGoalCost: React.PropTypes.func.isRequired,
}

export default AddCost;
