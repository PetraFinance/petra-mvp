import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
          {this.props.text}
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
    fontFamily: 'Avenir',
  },
});

AdvanceButton.propTypes = {
  handleAdvance: React.PropTypes.func.isRequired,
  pressAction: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default AdvanceButton;
