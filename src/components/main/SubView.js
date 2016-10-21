import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import { StyleSheet, Text, View } from 'react-native';

class MainView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={s.container}>
        <Header
          title={this.props.title}
          leftIcon={this.props.leftIcon}
          backgroundColor="#29B6F6"
          textColor="white"
        />
        <View style={s.children}>
          {this.props.children}
        </View>
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

export default MainView;
