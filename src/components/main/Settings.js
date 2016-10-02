import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseView from './BaseView';

class Settings extends React.Component {

  render() {
    const genSettings = () => (
      <View />
    );

    return (
      <BaseView
        parent={this.props.parent}
        title={this.props.title}
        children={genSettings()}
        scroll
      />
    );
  }
}

const s = StyleSheet.create({
  scrollContainer: {
    marginTop: 15,
  },
  page: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
  pageHeader: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFC',
  },
  pageHeaderText: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03A9F4',
  },
});

Settings.propTypes = {
  parent: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Settings;
