import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

class MainView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={s.container}>
        <Header
          title={this.props.title}
          rightIcon={this.props.rightIcon}
        />
        <View style={s.children}>
          {this.props.children}
        </View>
        <Navigation
          title={this.props.title}
        />
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
  },
});

export default MainView;
