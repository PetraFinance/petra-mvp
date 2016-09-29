import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Navigation from './Navigation';
import BaseView from './BaseView';

class Overview extends React.Component {

  render() {

    const genOverview = () => (
      <View>
        <Text style={s.sectionHeader}>Bank Accounts</Text>
        <View style={s.section}>
          <View style={s.sectionEntry}>
            <Text style={s.entryTitle}>Bank of America</Text>
            <Text style={s.entryCost}>$12,456</Text>
          </View>
          <Text style={s.entryDesc}>Bank of America Core Checking</Text>
        </View>
        <View style={s.section}>
          <View style={s.sectionEntry}>
            <Text style={s.entryTitle}>Bank of America</Text>
            <Text style={s.entryCost}>$9,420</Text>
          </View>
          <Text style={s.entryDesc}>Bank of America Core Savings</Text>
        </View>
      </View>
    );

    return (
      <BaseView
        title={this.props.title}
        children={genOverview()}
        scroll={true}
      />
    );
  }
}

const s = StyleSheet.create({
  section: {
    backgroundColor: 'white',
    padding: 10,
  },
  sectionHeader: {
    marginLeft: 10,
    marginBottom: 10,
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionEntry: {
    flexDirection: 'row',
  },
  entryTitle: {
    flex: 1,
    fontFamily: 'Avenir',
  },
  entryCost: {
    flex: 1,
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  entryDesc: {
    flex: 1,
    fontFamily: 'Avenir',
    color: '#8A8B8C',
  },
});

export default Overview;
