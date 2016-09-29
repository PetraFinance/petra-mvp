import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Navigation from './Navigation';

class Funds extends React.Component {

  render() {
    return (
      <View style={s.page}>
        <View style={s.pageHeader}>
          <Text style={s.pageHeaderText}>Funds</Text>
        </View>
        <ScrollView style={s.scrollContainer}>
        </ScrollView>
        <Navigation/>
      </View>
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
  container: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    flexDirection: 'column',
  },
});

export default Funds;
