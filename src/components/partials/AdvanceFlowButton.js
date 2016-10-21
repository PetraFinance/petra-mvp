import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AdvanceFlowButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={s.button}>
        <Text style={s.buttonText}>Next</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Avenir-Heavy',
    color: '#03A9F4',
  },
});

export default AdvanceFlowButton;
