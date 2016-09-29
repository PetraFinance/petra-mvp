import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Navigation from './Navigation';

class BaseView extends React.Component {

  render() {
    return (
      <View style={s.page}>
        <View style={s.pageHeader}>
          <Text style={s.pageHeaderText}>{this.props.title}</Text>
        </View>
        <ScrollView style={s.scrollContainer}>
          {this.props.children}
        </ScrollView>
        <Navigation
          activeRoute={this.props.title}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
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
  scrollContainer: {
    paddingTop: 15,
  },
});

export default BaseView;
