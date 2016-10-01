import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-redux-router';
import Dimensions from 'Dimensions';
import BaseView from './BaseView';
import Divider from '../partials/Divider';

class AddAccount extends React.Component {

  render() {

    const genAddAccount = () => (
      <View>
        <Text style={s.sectionHeader}>What type of account?</Text>
        <View style={s.sectionWrapper}>
          <View style={s.section}>
            <View style={s.sectionEntry}>
              <Text style={s.entryTitle}>Bank Account</Text>
            </View>
          </View>
          <Divider
            height={1}
            width={Dimensions.get('window').width - 14}
            marginLeft={14}
          />
          <View style={s.section}>
            <View style={s.sectionEntry}>
              <Text style={s.entryTitle}>Credit Card</Text>
            </View>
          </View>
          <Divider
            height={1}
            width={Dimensions.get('window').width - 14}
            marginLeft={14}
          />
          <View style={s.section}>
            <View style={s.sectionEntry}>
              <Text style={s.entryTitle}>Investments</Text>
            </View>
          </View>
        </View>
      </View>
    );

    return (
      <BaseView
        parent={this.props.parent}
        title={this.props.title}
        hideBottomNavBar={true}
        headerBackgroundColor={'#455A64'}
        headerTextColor={'white'}
        scroll={false}
        leftIcon={{type: 'exit', action: Actions.pop}}
        children={genAddAccount()}
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
    fontSize: 13,
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

export default AddAccount;
