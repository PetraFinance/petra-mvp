import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class RadioButtonSimple extends React.Component {

  evaluateCondition() {
    const result = this.props.check;
    if (result) {
      return {
        width: 8,
        height: 8,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#0FA0EA',
      }
    }
    return {
      width: 8,
      height: 8,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
    }
  }

  render() {
    return (
      <View style={s.wrapper}>
        <View style={s.radioButtonOuter}>
          <View style={this.evaluateCondition()}>
          </View>
        </View>
        <Text style={s.radioButtonLabel}>{this.props.condition}</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonOuter: {
    width: 12,
    height: 12,
    marginRight: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'#0FA0EA',
    backgroundColor: '#0FA0EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  radioButtonLabel: {
    fontFamily: 'Avenir',
    fontSize: 12,
  },
});

RadioButtonSimple.PropTypes = {
  check: React.PropTypes.bool.isRequired,
}

export default RadioButtonSimple;
