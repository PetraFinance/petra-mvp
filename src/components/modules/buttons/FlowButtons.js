import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class AdvanceFlowButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={s.container}>
        <TouchableHighlight
          underlayColor={'white'}
          onPress={this.props.nextAction}
          style={s.next}
        >
          <Text style={s.buttonText}>{this.props.next}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    marginBottom: 14,
  },
  next: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Avenir-Heavy',
    color: '#03A9F4',
  },
});

export default AdvanceFlowButton;
