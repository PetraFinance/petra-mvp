import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

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
      <TouchableHighlight
        underlayColor={'#0FA0EA'}
        style={s.container}
        onPress={this.handleAdvance}
      >
        <View>
          <Text style={s.continueText}>
            {this.props.text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const s = StyleSheet.create({
  container: {
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
