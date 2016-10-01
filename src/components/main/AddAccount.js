import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-redux-router';
import Dimensions from 'Dimensions';
import BaseView from './BaseView';
import Divider from '../partials/Divider';

class AddAccount extends React.Component {

  render() {

    const genAccounts = () => {
      const accounts = ['Bank Account', 'Credit Card', 'Investments'];
      let i;
      let list = [];
      for (i = 0; i < accounts.length; i++) {
        list.push(
          <View key={i} style={s.sectionWrapper}>
            <View style={s.section}>
              <View style={s.sectionEntry}>
                <Text style={s.entryTitle}>{accounts[i]}</Text>
                <View style={s.iconWrapper}>
                  <Image
                    source={require('../../../assets/forwardArrow.png')}
                    style={s.entryIcon}
                  />
                </View>
              </View>
            </View>
          </View>
        );
        if (i != accounts.length - 1) {
          list.push(
            <Divider
              height={1}
              key={(i + 1) / (accounts.length + 1)}
              width={Dimensions.get('window').width - 14}
              marginLeft={14}
            />
          )
        }
      }
      return list;
    };

    const genAddAccount = () => (
      <View>
        <Text style={s.sectionHeader}>What type of account?</Text>
        {genAccounts()}
      </View>
    )


    return (
      <BaseView
        parent={this.props.parent}
        title={this.props.title}
        hideBottomNavBar={true}
        headerBackgroundColor={'#455A64'}
        headerTextColor={'white'}
        scroll={false}
        leftIcon={{type: 'exit', action: Actions.pop }}
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
    justifyContent: 'center',
  },
  entryTitle: {
    flex: 1,
    fontFamily: 'Avenir',
  },
  iconWrapper: {
    justifyContent: 'center',
  },
  entryIcon: {
    width: 10,
    height: 10,
  },
});

AddAccount.PropTypes = {
  parent: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default AddAccount;
