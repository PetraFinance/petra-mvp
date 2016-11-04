import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { ToMonetaryStr } from '../../../helpers/currency';

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const completed = this.props.completed;

    const setButtonStyle = () => ({
      flex: 1,
      height: 40,
      backgroundColor: this.props.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
    });

    if (completed) {
      return (
        <TouchableHighlight
          underlayColor={this.props.backgroundColor}
          onPress={this.props.rmAction}
          style={setButtonStyle()}
        >
          <Text style={s.buttonText}>Remove</Text>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight
          underlayColor={this.props.backgroundColor}
          onPress={this.props.saveAction}
          style={setButtonStyle()}
        >
          <Text style={s.buttonText}>Save (Add {ToMonetaryStr(this.props.saveAmount)})</Text>
        </TouchableHighlight>
      );
    }
  }
}

const s = StyleSheet.create({
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
