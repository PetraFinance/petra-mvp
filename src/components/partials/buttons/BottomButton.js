import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class BottomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handlePressAction = this.handlePressAction.bind(this);
  }

  handlePressAction() {
    this.props.pressAction();
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor={'#03A9F4'}
        style={s.container}
        onPress={this.handlePressAction}
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
    backgroundColor: '#03A9F4',
  },
  continueText: {
    color: 'white',
    fontFamily: 'Avenir-Heavy',
  },
});

BottomButton.propTypes = {
  pressAction: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default BottomButton;
