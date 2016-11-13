import React from 'react';
import Navigation from './Navigation';
import ViewHeader from './ViewHeader';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class FlowView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <View style={s.container}>
        <ViewHeader
          title={this.props.title}
          leftIcon={this.props.leftIcon}
          backgroundColor="#29B6F6"
          textColor="white"
        />
        <View style={s.children}>
          {this.props.children}
        </View>
        <KeyboardSpacer />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
  children: {
    flex: 1,
    backgroundColor: '#03A9F4',
  },
});

FlowView.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired,
  leftIcon: React.PropTypes.object,
  rightIcon: React.PropTypes.object,
}

export default FlowView;
