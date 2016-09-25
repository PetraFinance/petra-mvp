import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';

class Landing extends React.Component {

  render() {
    return (
      <View style={s.page}>
        <View style={s.topPanel}>
        </View>
        <View style={s.container}>
        </View>
        <Navigation />
      </View>
    )
  }
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
  },
  topPanel: {
    height: 150,
    backgroundColor: '#03A9F4',
  },
});

export default Landing;
