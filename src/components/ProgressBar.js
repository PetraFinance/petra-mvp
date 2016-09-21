import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-redux-router';

class BackButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }
  
  render() {
    return (
      <View style={s.back}>
      </View>
    );
  }
}

const s = StyleSheet.create({
  back: {
    marginTop: 10,
    marginLeft: 20,
    height: 50,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  backText: {
    fontFamily: 'Avenir',
  }
})

export default BackButton;
