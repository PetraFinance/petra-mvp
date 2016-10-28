import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

import SubView from '../layout/FlowView';
import { IntToMonetaryStr, MonetaryStrToInt } from '../../helpers/currency';

class GoalsEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = this.props.id;
    const goal = this.props.goalsMap[id];
    const name = goal.name;
    const date = goal.date;
    let saveAmount = goal.saveAmount;
    saveAmount = IntToMonetaryStr(saveAmount).replace('$', '');
    let cost = goal.cost;
    cost = IntToMonetaryStr(cost).replace('$', '');

    const handleUpdateGoal = (id, field, value) => {
      if (field === 'cost' || field === 'saveAmount') {
        value = MonetaryStrToInt(value);
      }
      this.props.handleUpdateGoal(id, field, value);
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
          maxLength={35}
          onChangeText={(value) => handleUpdateGoal(id, 'cost', value)}
          value={cost}
        />
        <Text style={s.header}>Due Date</Text>
        <TextInput
          style={s.input}
          maxLength={35}
          onChangeText={(value) => handleUpdateGoal(id, 'date', value)}
          value={date}
        />
        <Text style={s.header}>Save Amount</Text>
        <TextInput
          style={s.input}
          maxLength={35}
          onChangeText={(value) => handleUpdateGoal(id, 'saveAmount', value)}
          value={saveAmount}
        />
      </View>
    );
    return (
      <SubView
        title="Edit Goal"
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
