import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Navigation from './Navigation';
import BaseView from './BaseView';

class Funds extends React.Component {

  render() {

    const genFunds = () => (
      <View></View>
    );

    return (
      <BaseView
        parent={this.props.parent}
        title={this.props.title}
        children={genFunds()}
        scroll={true}
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

export default Funds;
