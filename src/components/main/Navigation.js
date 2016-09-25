import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Navigation extends React.Component {

  render() {
    return (
      <View style={s.bar}>
        <View style={s.navItem}>
          <Text style={s.navText}>Home</Text>
        </View>
        <View style={s.navItem}>
          <Text style={s.navText}>Dank</Text>
        </View>
        <View style={s.navItem}>
          <Text style={s.navText}>Memes</Text>
        </View>
      </View>
    )
  }
}

const s = StyleSheet.create({
  bar: {
    height: 50,
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
