import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

import GoalsCard from '../modules/cards/GoalsCard';
import FlowButtons from '../modules/buttons/FlowButtons';
import SubView from '../layout/FlowView';

class AddDueDate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleGoalDate = (date) => {
      this.props.handleGoalDate(date);
    }
    const goalDate = this.props.goalDate;
    const genPage = () => {
      return (
        <View style={s.container}>
          <View style={s.form}>
            <Text style={s.header}>When do you want to finish this goal by?</Text>
            <TextInput
              style={s.input}
              maxLength={35}
              onChangeText={(date) => handleGoalDate(date)}
              value={goalDate}
            />
            <View style={s.underline}></View>
          </View>
          <FlowButtons
            next={"Next"}
            nextAction={Actions.goals_saveAmount}
          />
        </View>
      );
    }
    return (
      <SubView
        title="Add a Due Date"
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
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: 'white',
  },
  input: {
    height: 40,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'white',
  },
  underline: {
    height: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
  },
});

AddDueDate.propTypes = {
  goalDate: React.PropTypes.string.isRequired,
  handleGoalDate: React.PropTypes.func.isRequired,
}

export default AddDueDate;
