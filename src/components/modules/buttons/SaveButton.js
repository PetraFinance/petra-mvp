import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { IntToMonetaryStr, MonetaryStrToInt } from '../../../helpers/currency';

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={s.container}>
        <TouchableHighlight
          underlayColor={'#03A9F4'}
          onPress={this.props.action}
          style={s.saveButton}
        >
          <Text style={s.buttonText}>Save (Add {IntToMonetaryStr(this.props.saveAmount)})</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={'white'}
          onPress={this.props.action}
          style={s.editButton}
        >
          <Text style={s.editButtonText}>Edit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  editButton: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    fontFamily: 'Avenir-Heavy',
    color: 'white',
  },
  editButtonText: {
    fontFamily: 'Avenir-Heavy',
    color: '#03A9F4',
  },
});

export default SaveButton;
