import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categories = [
      { name: 'Goals', action: Actions.goals, },
      { name: 'Overview', action: Actions.overview, },
      { name: 'Settings', action: Actions.settings, },
    ];

    const setStyle = (route) => {
      if (this.props.title === route) {
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

    const genNavigation = categories.map((category, i) => (
      <TouchableHighlight
        key={i}
        underlayColor={'#F8F9FA'}
        style={s.navItem}
        onPress={category.action}
      >
        <View>
          <View style={s.imageWrapper}>
            {setImage(this.props.title, i)}
          </View>
          <Text style={setStyle(category.name)}>{category.name}</Text>
        </View>
      </TouchableHighlight>
    ));

    return (
      <View style={s.bar}>
        {genNavigation}
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
const goalsIcon = require('../../../assets/navigation/goals.png');
const goalsIconActive = require('../../../assets/navigation/goalsActive.png');
const overviewIcon = require('../../../assets/navigation/overview.png');
const overviewIconActive = require('../../../assets/navigation/overviewActive.png');
const settingsIcon = require('../../../assets/navigation/settings.png');
const settingsIconActive = require('../../../assets/navigation/settingsActive.png');
const routingStates = {
  goals: [
    goalsIconActive,
    overviewIcon,
    settingsIcon,
  ],
  overview: [
    goalsIcon,
    overviewIconActive,
    settingsIcon,
  ],
  settings: [
    goalsIcon,
    overviewIcon,
    settingsIconActive,
  ],
};

Navigation.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Navigation;
