import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-redux-router';

class Navigation extends React.Component {

  render() {

    const categories = [
      {
        name: 'Overview',
        action: Actions.overview,
      },
      {
        name: 'Funds',
        action: Actions.funds,
      },
      {
        name: 'Transactions',
        action: Actions.transactions,
      },
      {
        name: 'Learn',
        action: Actions.learn,
      },
      {
        name: 'Settings',
        action: Actions.settings,
      },
    ];
    const navigation = categories.map((category, i) => (
      <TouchableHighlight
        key={i}
        underlayColor={'#F8F9FA'}
        style={s.navItem}
        onPress={category.action}
      >
        <Text style={s.navText}>{category.name}</Text>
      </TouchableHighlight>
    ));

    return (
      <View style={s.bar}>
        {navigation}
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
    backgroundColor: '#F8F9FA',
  },
  navText: {
    color: '#03A9F4',
    textAlign: 'center',
    fontSize: 11,
  },
  navItem: {
    flex: 1,
  },
});

export default Navigation;
