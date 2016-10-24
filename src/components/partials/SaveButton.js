import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={s.button}>
        <Text style={s.buttonText}>Save (Add {this.props.saveAmount})</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Avenir-Heavy',
    color: 'white',
  },
});

export default SaveButton;
