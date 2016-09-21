import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Actions } from 'react-native-redux-router';

class AdvanceButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdvance = this.handleAdvance.bind(this);
  }

  handleAdvance() {
    this.props.handleAdvance();
    this.props.pressAction();
  }

  render() {
    return (
      <View style={s.continue}>
        <Text
          style={s.continueText}
          onPress={this.handleAdvance}
        >
          { this.props.text }
        </Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  continue: {
    height: 50,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#0FA0EA',
  },
  continueText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  }
})

export default AdvanceButton;
