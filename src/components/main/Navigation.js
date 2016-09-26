import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Navigation extends React.Component {

  render() {
    return (
      <View style={s.bar}>
        <View style={s.navItem}>
          <Text style={s.navText}>Feed</Text>
        </View>
        <View style={s.navItem}>
          <Text style={s.navText}>Funds</Text>
        </View>
        <View style={s.navItem}>
          <Text style={s.navText}>Overview</Text>
        </View>
        <View style={s.navItem}>
          <Text style={s.navText}>Profile</Text>
        </View>
      </View>
    )
  }
}

const s = StyleSheet.create({
  bar: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03A9F4',
  },
  topPanel: {
    height: 150,
    backgroundColor: '#03A9F4',
  },
  navText: {
    color: 'white',
    textAlign: 'center',
  },
  navItem: {
    flex: 1,
  },
});

export default Navigation;
