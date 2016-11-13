import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

import SubView from '../layout/SubView';

class GoalsEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = this.props.id;
    const goal = this.props.goalsMap[id];

    const name = goal.name;
    const date = goal.date;
    const saveAmount = goal.saveAmount;
    const cost = goal.cost;

    const handleUpdateGoal = (id, field, value) => {
      this.props.handleUpdateGoal(id, field, value);
    }

    const handleBack = () => {
      StatusBar.setBarStyle('default', true);
      Actions.pop();
    }

    const genPage = () => (
      <View style={s.container}>
        <Text style={s.header}>Name</Text>
        <TextInput
          style={s.input}
          maxLength={35}
          onChangeText={(value) => handleUpdateGoal(id, 'name', value)}
          value={name}
        />
        <Text style={s.header}>Cost</Text>
        <TextInput
          style={s.input}
          maxLength={8}
          onChangeText={(value) => handleUpdateGoal(id, 'cost', value)}
          value={cost}
          keyboardType='numeric'
        />
        <Text style={s.header}>Save Amount</Text>
        <TextInput
          style={s.input}
          maxLength={8}
          onChangeText={(value) => handleUpdateGoal(id, 'saveAmount', value)}
          value={saveAmount}
          keyboardType='numeric'
        />
      </View>
    );
    return (
      <SubView
        title="Edit Goal"
        leftIcon={ {type: "exitWhite", action: handleBack } }
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
  header: {
    fontFamily: 'Avenir-Heavy',
    color: 'white',
  },
  input: {
    height: 40,
    marginBottom: 15,
    fontFamily: 'Avenir',
    color: 'white',
  },
});

GoalsEdit.propTypes = {
  id: React.PropTypes.string.isRequired,
}

export default GoalsEdit;
