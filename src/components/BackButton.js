import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-redux-router';

class BackButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.handleBack();
    Actions.pop();
  }

  render() {
    return (
      <View style={s.back}>
        <Text
          style={s.backText}
          onPress={this.handleBack}
        >
          Back
        </Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  back: {
    marginTop: 15,
    marginLeft: 20,
    height: 15,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  backText: {
    fontFamily: 'Avenir',
  }
})

export default BackButton;
