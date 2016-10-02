import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-redux-router';

class Navigation extends React.Component {

  render() {
    const categories = [
      {
        name: 'Transactions',
        action: Actions.transactions,
      },
      {
        name: 'Funds',
        action: Actions.funds,
      },
      {
        name: 'Overview',
        action: Actions.overview,
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

    const setStyle = (route) => {
      if (this.props.parent === route) {
        return s.navTextActive;
      }
      return s.navText;
    };

    const setImage = (route, i) => {
      const image = routingStates[route.toLowerCase()][i];
      return (
        <Image source={image} resizeMode={'contain'} style={s.navIcon}/>
      );
    };

    const navigation = categories.map((category, i) => (
      <TouchableHighlight
        key={i}
        underlayColor={'#F8F9FA'}
        style={s.navItem}
        onPress={category.action}
      >
        <View>
          <View style={s.imageWrapper}>
            {setImage(this.props.parent, i)}
          </View>
          <Text style={setStyle(category.name)}>{category.name}</Text>
        </View>
      </TouchableHighlight>
    ));

    return (
      <View style={s.bar}>
        {navigation}
      </View>
    );
  }
}

const s = StyleSheet.create({
  bar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  navText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
  },
  navTextActive: {
    color: '#03A9F4',
    textAlign: 'center',
    fontSize: 10,
  },
  navIcon: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 3,
  },
  navItem: {
    flex: 1,
  },
});

// React Native does not allow for dynamic data in require statements.

const fundsIcon = require('../../../assets/navigation/funds.png');
const fundsIconActive = require('../../../assets/navigation/fundsActive.png');

const learnIcon = require('../../../assets/navigation/learn.png');
const learnIconActive = require('../../../assets/navigation/learnActive.png');

const overviewIcon = require('../../../assets/navigation/overview.png');
const overviewIconActive = require('../../../assets/navigation/overviewActive.png');

const transactionsIcon = require('../../../assets/navigation/transactions.png');
const transactionsIconActive = require('../../../assets/navigation/transactionsActive.png');

const settingsIcon = require('../../../assets/navigation/settings.png');
const settingsIconActive = require('../../../assets/navigation/settingsActive.png');

const routingStates = {
  transactions: [
    transactionsIconActive,
    fundsIcon,
    overviewIcon,
    learnIcon,
    settingsIcon,
  ],
  funds: [
    transactionsIcon,
    fundsIconActive,
    overviewIcon,
    learnIcon,
    settingsIcon,
  ],
  overview: [
    transactionsIcon,
    fundsIcon,
    overviewIconActive,
    learnIcon,
    settingsIcon,
  ],
  learn: [
    transactionsIcon,
    fundsIcon,
    overviewIcon,
    learnIconActive,
    settingsIcon,
  ],
  settings: [
    transactionsIcon,
    fundsIcon,
    overviewIcon,
    learnIcon,
    settingsIconActive,
  ],
};

Navigation.propTypes = {
  parent: React.PropTypes.string.isRequired,
};

export default Navigation;
