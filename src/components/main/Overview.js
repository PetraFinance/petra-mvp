import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-redux-router';
import Dimensions from 'Dimensions';
import BaseView from './BaseView';
import Divider from '../partials/Divider';

class Overview extends React.Component {

  render() {

    const genOverview = () => (
      <View>
        <Text style={s.sectionHeader}>Bank Accounts</Text>
        <View style={s.sectionWrapper}>
          <View style={s.section}>
            <View style={s.sectionEntry}>
              <Text style={s.entryTitle}>Bank of America</Text>
              <Text style={s.entryCost}>$12,456</Text>
            </View>
            <Text style={s.entryDesc}>Bank of America Core Checking</Text>
          </View>
          <Divider
            height={1}
            width={Dimensions.get('window').width - 14}
            marginLeft={14}
          />
          <View style={s.section}>
            <View style={s.sectionEntry}>
              <Text style={s.entryTitle}>Bank of America</Text>
              <Text style={s.entryCost}>$9,420</Text>
            </View>
            <Text style={s.entryDesc}>Bank of America Core Savings</Text>
          </View>
        </View>
      </View>
    );

    return (
      <BaseView
        parent={this.props.parent}
        title={this.props.title}
        children={genOverview()}
        scroll={true}
        rightIcon={{type: 'add', action: Actions.addAccount}}
      />
    );
  }
}

const s = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: 'white',
  },
  section: {
    backgroundColor: 'white',
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 16,
    paddingBottom: 16,
  },
  sectionHeader: {
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 20,
    paddingBottom: 10,
    fontFamily: 'Avenir-Heavy',
    fontSize: 13  ,
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

Overview.PropTypes = {
  parent: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Overview;
