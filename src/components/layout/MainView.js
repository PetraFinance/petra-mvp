import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Navigation from './Navigation';
import ViewHeader from './ViewHeader';

class MainView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    StatusBar.setBarStyle('default', true);
    return (
      <View style={s.container}>
        <ViewHeader
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

MainView.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired,
  leftIcon: React.PropTypes.object,
  rightIcon: React.PropTypes.object,
}

export default MainView;
